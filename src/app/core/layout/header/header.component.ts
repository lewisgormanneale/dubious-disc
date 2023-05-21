import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { Pokedex, PokemonEntry, PokemonSpecies } from 'src/app/core/models';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
  standalone: true,
  providers: [TitleCasePipe],
  imports: [
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    FormsModule,
    CoreModule,
    CommonModule,
    RouterLink,
  ],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuCollapsed = true;
  titleCasePipe = new TitleCasePipe();
  pokemonEntries: PokemonEntry[] = {} as PokemonEntry[];
  model: PokemonEntry = {
    entry_number: 0,
    pokemon_species: {
      name: '',
      url: '',
    },
  };
  formatter = (pokemon: PokemonEntry) => pokemon.pokemon_species.name;
  search: OperatorFunction<
    string,
    readonly { entry_number: number; pokemon_species: PokemonSpecies }[]
  > = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.pokemonEntries
          .filter((pokemon) =>
            new RegExp(term, 'mi').test(pokemon.pokemon_species.name)
          )
          .slice(0, 10)
      )
    );

  constructor(private pokedexService: PokedexService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon(): void {
    this.pokedexService.getPokedex(1).subscribe((pokedex: Pokedex) => {
      this.pokemonEntries = pokedex.pokemon_entries.map((entry) => {
        // Capitalize the first letter of each word in a Pokemon's name
        return {
          entry_number: entry.entry_number,
          pokemon_species: {
            name: this.titleCasePipe.transform(entry.pokemon_species.name),
            url: entry.pokemon_species.url,
          },
        };
      });
    });
  }

  onSubmit(): void {
    let pokemonID = this.model.pokemon_species.url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/pokemon/', pokemonID]);
  }
}
