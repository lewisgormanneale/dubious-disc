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
import { PokemonEntry, PokemonSpecies } from 'src/app/core/models';

@Component({
  selector: 'app-pokedex-search',
  templateUrl: './pokedex-search.component.html',
  styleUrls: ['./pokedex-search.component.scss'],
})
export class PokedexSearchComponent {
  @Input() pokedexEntries: PokemonEntry[] = {} as PokemonEntry[];

  constructor(private router: Router) {}

  model: PokemonEntry = {} as PokemonEntry;

  formatter = (pokemon: PokemonEntry) => pokemon.pokemon_species?.name;

  search: OperatorFunction<
    string,
    readonly { entry_number: number; pokemon_species: PokemonSpecies }[]
  > = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.pokedexEntries
          .filter((pokemon) =>
            new RegExp(term, 'mi').test(pokemon.pokemon_species.name)
          )
          .slice(0, 10)
      )
    );

  onSubmit(): void {
    let pokemonID = this.model.pokemon_species.url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/pokemon/', pokemonID]);
  }
}
