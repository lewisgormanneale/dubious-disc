import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
})
export class PokemonDataComponent {
  @Input() pokemon?: any;
  @Input() pokemon_species?: any;
}
