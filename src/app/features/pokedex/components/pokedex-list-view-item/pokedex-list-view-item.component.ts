import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dd-pokedex-list-view-item',
  templateUrl: './pokedex-list-view-item.component.html',
})
export class PokedexListViewItemComponent implements OnInit {
  @Input() pokemon: any = {} as any;
  imageURL: string = '';

  ngOnInit(): void {
    this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.species_id.id}.png`;
  }
}
