import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  OperatorFunction,
} from 'rxjs';
import { CombinedPokemonEntry, PokemonSpecies } from 'src/app/core/models';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent {
  @Input() pokedexEntries: CombinedPokemonEntry[] =
    {} as CombinedPokemonEntry[];

  constructor(private router: Router) {}

  model: CombinedPokemonEntry = {} as CombinedPokemonEntry;

  formatter = (pokemon: CombinedPokemonEntry) =>
    pokemon.pokemon_species_details?.name;

  search: OperatorFunction<
    string,
    readonly { entry_number: number; pokemon_species_details: PokemonSpecies }[]
  > = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.pokedexEntries
          .filter((pokemon) =>
            new RegExp(term, 'mi').test(pokemon.pokemon_species_details.name)
          )
          .slice(0, 10)
      )
    );

  onSubmit(): void {
    let pokemonID = this.model.pokemon_species.url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/pokemon/', pokemonID]);
  }
}
