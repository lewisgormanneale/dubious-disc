import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil, tap, switchMap, forkJoin, map, Subject } from 'rxjs';
import { DropdownLinkSection, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokemon-navigation',
  templateUrl: './pokemon-navigation.component.html',
})
export class PokemonNavigationComponent implements OnChanges {
  @Input() pokedexGeneration = '';
  @Input() pokemonSpecies: Tables<'pokemon_species'> =
    {} as Tables<'pokemon_species'>;

  @Output() selectedVersionGroup = new EventEmitter<any>();
  @Output() versions = new EventEmitter<any>();

  selectedVersionGroupName: string = '';
  pokemonDropdownOptions: DropdownLinkSection[] = [];
  randomPokemonIdentifier: string = '';
  previousPokemonImageUrl: string = '';
  previousPokemonIdentifier: string = '';
  nextPokemonImageUrl: string = '';
  nextPokemonIdentifier: string = '';

  private supabase: SupabaseService = inject(SupabaseService);
  private router: Router = inject(Router);
  private destroy$ = new Subject<void>();

  ngOnChanges(): void {
    this.getPokemonDropdownOptions();
  }
  getPokemonDropdownOptions() {
    let availablePokedexes: Tables<'pokedexes'>[] = [];
    this.supabase
      .getVersionGroupByIdentifier(this.pokedexGeneration)
      .pipe(
        takeUntil(this.destroy$),
        tap((versionGroup) => {
          this.selectedVersionGroup.emit(versionGroup);
          this.selectedVersionGroupName = versionGroup.name;
          this.supabase
            .getVersionsByVersionGroupId(versionGroup.id)
            .subscribe((versions) => {
              this.versions.emit(versions);
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

  navigateToPokemon(pokemonIdentifier: string) {
    this.router.navigate([
      '/pokedex',
      this.pokedexGeneration,
      pokemonIdentifier,
    ]);
  }

  navigateToPokedex(pokedexGeneration: string) {
    this.router.navigate(['/pokedex/' + pokedexGeneration]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
