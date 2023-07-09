import { Component, Input } from '@angular/core';
import { Type, TYPE_INFO } from 'src/app/core/models/types.model';

@Component({
  selector: 'app-type-box',
  templateUrl: './type-box.component.html',
  styleUrls: ['./type-box.component.scss'],
})
export class TypeBoxComponent {
  @Input() type: Type = {
    slot: 0,
    type: { name: '', url: '' },
  };

  getTypeName(type: Type): string {
    const typeID = +type.type.url.split('/').slice(-2, -1)[0];
    return TYPE_INFO[typeID].name;
  }

  getTypeBackground(type: Type): string {
    const typeID = +type.type.url.split('/').slice(-2, -1)[0];
    return TYPE_INFO[typeID].type_color;
  }
}
