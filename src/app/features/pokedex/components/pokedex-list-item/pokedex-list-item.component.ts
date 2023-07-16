import { Component, Input } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  styleUrls: ['./pokedex-list-item.component.scss'],
})
export class PokedexListItemComponent {
  @Input() pokemon: PokemonEntry = {} as PokemonEntry;

  constructor() {}
}
