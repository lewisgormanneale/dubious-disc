import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
})
export class PokedexListItemComponent implements OnInit {
  @Input() pokemon: any = {} as any;
  localisedPokemonName: string = '';
  imageURL: string = '';

  ngOnInit(): void {
    this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`;
  }
}
