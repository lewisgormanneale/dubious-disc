import { Component, Input } from '@angular/core';
import { PokemonType } from 'src/app/core/models';
import { AllPokemonTypeValues } from '../../utils/types.utils';

@Component({
  selector: 'app-type-box',
  templateUrl: './type-box.component.html',
  styleUrls: ['./type-box.component.css'],
})
export class TypeBoxComponent {
  @Input() type: PokemonType = {
    slot: 0,
    type: { name: '', url: '' },
  };

  getTypeName(type: PokemonType): string {
    const typeID = +type.type.url.split('/').slice(-2, -1)[0];
    return AllPokemonTypeValues[typeID].name;
  }

  getTypeBackground(type: PokemonType): string {
    const typeID = +type.type.url.split('/').slice(-2, -1)[0];
    return AllPokemonTypeValues[typeID].type_color;
  }
}
