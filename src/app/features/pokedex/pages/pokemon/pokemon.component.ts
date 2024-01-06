import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap, forkJoin } from 'rxjs';
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

  pokedexGeneration: string = '';
  selectedVersionGroup: any = '';

  pokemonDropdownOptions: DropdownLinkSection[] = [];
  randomPokemonIdentifier: string = '';

  imageUrl: string = '';
  previousPokemonImageUrl: string = '';
  nextPokemonImageUrl: string = '';

  private supabase: SupabaseService = inject(SupabaseService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const identifier = params['pokemon'];
          this.pokedexGeneration = params['generation'];
          return this.supabase.getPokemonSpeciesByIdentifier(identifier);
        }),
        tap((data) => {
          this.pokemonSpecies = data;
          this.imageUrl = this.supabase.storage
            .from('pokemon')
            .getPublicUrl('home-previews/' + data.id + '.png').data.publicUrl;
        }),
        switchMap((data) => {
          return this.supabase.getPokemonBySpeciesId(data.id);
        }),
        tap((data) => {
          this.pokemonForms = data;
          this.selectedForm = data[0];
        }),
        switchMap((data) => {
          return this.supabase.getPokemonTypesByPokemonId(data[0].id);
        }),
        tap((data) => {
          this.pokemonTypes = data;
        })
      )
      .subscribe();
    this.getPokemonDropdownOptions();
  }

  handleNewSelectedForm(form: any) {
    this.selectedForm = form;
    this.supabase.getPokemonTypesByPokemonId(form.id).subscribe((data) => {
      this.pokemonTypes = data;
    });
    if (this.shiny) {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl('home-previews/shiny/' + form.id + '.png').data.publicUrl;
    } else {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl('home-previews/' + form.id + '.png').data.publicUrl;
    }
  }

  getPokemonDropdownOptions() {
    let availablePokedexes: Tables<'pokedexes'>[] = [];
    this.supabase
      .getVersionGroupByIdentifier(this.pokedexGeneration)
      .pipe(
        switchMap((versionGroup) => {
          return this.supabase.getPokedexesByVersionGroupId(versionGroup.id);
        }),
        switchMap((pokedexes) => {
          availablePokedexes = pokedexes;
          console.log(availablePokedexes);
          return forkJoin(
            pokedexes.map((pokedex: any) =>
              this.supabase.getPokemonSpeciesByPokedexId(pokedex.id)
            )
          );
        }),
        map((pokemonArray: any) => {
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
    if (this.shiny) {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl(
          'home-previews/shiny/' + this.selectedForm.id + '.png'
        ).data.publicUrl;
    } else {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl(
          'home-previews/' + this.selectedForm.id + '.png'
        ).data.publicUrl;
    }
  }
}
