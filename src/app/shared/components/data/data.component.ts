import { Component, Input } from '@angular/core';
import { Pokemon, PokemonSpecies } from 'src/app/core/models';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent {
  @Input() pokemon?: Pokemon;
  @Input() pokemon_species?: PokemonSpecies;
}
