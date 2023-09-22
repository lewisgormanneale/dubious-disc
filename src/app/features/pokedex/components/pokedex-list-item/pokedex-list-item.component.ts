import { Component, Input, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  styleUrls: ['./pokedex-list-item.component.scss'],
})
export class PokedexListItemComponent implements OnInit {
  @Input() pokemon: PokemonEntry = {} as PokemonEntry;
  localisedPokemonName: string = '';
  pokemonID: string = '';
  imageURL: string = '';
  constructor() {}

  ngOnInit(): void {
    this.pokemonID = this.pokemon.pokemon_species.url
      .split('/')
      .slice(-2, -1)[0];
    this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`;
  }
}
