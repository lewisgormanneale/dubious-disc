import { Component, Input, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
})
export class PokedexListItemComponent implements OnInit {
  @Input() pokemon: any = {} as any;
  localisedPokemonName: string = '';
  imageURL: string = '';
  constructor() {}

  ngOnInit(): void {
    this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`;
  }
}
