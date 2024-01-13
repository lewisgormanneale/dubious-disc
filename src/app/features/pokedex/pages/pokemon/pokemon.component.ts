import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { versions } from 'process';
import { map, switchMap, tap, forkJoin, Subject, takeUntil } from 'rxjs';
import { DropdownLinkSection, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

interface DropdownLinkOption {
  name: string;
  path: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  pokemonForms: Tables<'pokemon'>[] = [];
  selectedForm: Tables<'pokemon'> = {} as Tables<'pokemon'>;
  pokemonSpecies: Tables<'pokemon_species'> = {} as Tables<'pokemon_species'>;
  pokemonTypes: any;
  shiny: boolean = false;
  female: boolean = false;

  pokedexGeneration: string = '';
  selectedVersionGroup: any = '';
  versions: Tables<'versions'>[] = [];

  pokemonDropdownOptions: DropdownLinkSection[] = [];
  randomPokemonIdentifier: string = '';

  imageUrl: string = '';
  previousPokemonImageUrl: string = '';
  previousPokemonIdentifier: string = '';
  nextPokemonImageUrl: string = '';
  nextPokemonIdentifier: string = '';

  private supabase: SupabaseService = inject(SupabaseService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const identifier = params['pokemon'];
          this.pokedexGeneration = params['version-group'];
          return this.supabase.getPokemonSpeciesByIdentifier(identifier);
        }),
        tap((pokemonSpecies) => {
          this.pokemonSpecies = pokemonSpecies;
        }),
        switchMap((pokemonSpecies) => {
          return this.supabase.getPokemonBySpeciesId(pokemonSpecies.id);
        }),
        tap((pokemon) => {
          this.pokemonForms = pokemon;
          this.selectedForm = pokemon[0];
          if (!this.pokemonSpecies.has_gender_differences) {
            this.female = false;
          }
          this.getImageUrl();
        }),
        switchMap((pokemon) => {
          return this.supabase.getPokemonTypesByPokemonId(pokemon[0].id);
        }),
        tap((pokemonTypes) => {
          this.pokemonTypes = pokemonTypes;
        })
      )
      .subscribe(() => {
        this.getPokemonDropdownOptions();
      });
  }

  handleNewSelectedForm(form: any) {
    this.selectedForm = form;
    this.supabase.getPokemonTypesByPokemonId(form.id).subscribe((data) => {
      this.pokemonTypes = data;
    });
    this.getImageUrl();
  }

  getPokemonDropdownOptions() {
    let availablePokedexes: Tables<'pokedexes'>[] = [];
    this.supabase
      .getVersionGroupByIdentifier(this.pokedexGeneration)
      .pipe(
        takeUntil(this.destroy$),
        tap((versionGroup) => {
          this.selectedVersionGroup = versionGroup;
          this.supabase
            .getVersionsByVersionGroupId(versionGroup.id)
            .subscribe((versions) => {
              this.versions = versions;
            });
        }),
        switchMap((versionGroup) => {
          return this.supabase.getPokedexesByVersionGroupId(versionGroup.id);
        }),
        switchMap((pokedexes) => {
          availablePokedexes = pokedexes;
          return forkJoin(
            pokedexes.map((pokedex: any) =>
              this.supabase.getPokemonSpeciesByPokedexId(pokedex.id)
            )
          );
        }),
        map((pokemonArray: any) => {
          const combined = pokemonArray.flat();
          this.randomPokemonIdentifier =
            combined[
              Math.floor(Math.random() * combined.length)
            ]?.species_id.identifier;

          const currentPokemonIndex = combined.findIndex(
            (pokemon: any) =>
              pokemon.species_id.identifier === this.pokemonSpecies.identifier
          );

          const previousPokemon = combined[currentPokemonIndex - 1]?.species_id;

          if (previousPokemon) {
            this.previousPokemonIdentifier = previousPokemon.identifier;
            this.previousPokemonImageUrl = this.supabase.storage
              .from('pokemon')
              .getPublicUrl(
                'home-previews/' + previousPokemon.id + '.png'
              ).data.publicUrl;
          }

          const nextPokemon = combined[currentPokemonIndex + 1]?.species_id;

          if (nextPokemon) {
            this.nextPokemonIdentifier = nextPokemon.identifier;
            this.nextPokemonImageUrl = this.supabase.storage
              .from('pokemon')
              .getPublicUrl(
                'home-previews/' + nextPokemon.id + '.png'
              ).data.publicUrl;
          }

          return availablePokedexes.map((pokedex: any, index: number) => {
            return {
              name: pokedex.name,
              options: pokemonArray[index].map(
                (pokemon: any, index: number) => {
                  return {
                    name: `№ ${index + 1} ` + pokemon.species_id.name,
                    path:
                      '/pokedex/' +
                      this.pokedexGeneration +
                      '/' +
                      pokemon.species_id.identifier,
                  };
                }
              ),
            };
          });
        })
      )
      .subscribe((data) => {
        this.pokemonDropdownOptions = data;
      });
  }

  shinyToggle() {
    this.shiny = !this.shiny;
    this.getImageUrl();
  }

  genderToggle() {
    this.female = !this.female;
    this.getImageUrl();
  }

  getImageUrl() {
    let url = 'home-previews/';

    this.shiny ? (url += 'shiny/') : null;
    this.female ? (url += 'female/') : null;
    url += this.selectedForm.id + '.png';

    this.imageUrl = this.supabase.storage
      .from('pokemon')
      .getPublicUrl(url).data.publicUrl;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
