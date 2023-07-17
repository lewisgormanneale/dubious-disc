import { Component, Input, OnInit } from '@angular/core';
import { PokemonEntry, PokemonName } from 'src/app/core/models';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  styleUrls: ['./pokedex-list-item.component.scss'],
})
export class PokedexListItemComponent implements OnInit {
  @Input() pokemon: PokemonEntry = {} as PokemonEntry;
  localisedPokemonName: string = '';
  constructor() {}

  ngOnInit(): void {
    if (this.pokemon.pokemon_species.species_details?.names) {
      this.getPokemonNameByLanguage(
        this.pokemon.pokemon_species.species_details.names,
        'en'
      );
    }
  }

  getPokemonNameByLanguage(names: PokemonName[], language: string) {
    this.localisedPokemonName = names.find(
      (name: PokemonName) => name.language.name === language
    )?.name!;
  }
}
