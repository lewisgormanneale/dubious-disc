import { Pipe, PipeTransform } from '@angular/core';
import { Type, TYPE_INFO } from 'src/app/core/models/types.model';

@Pipe({
  name: 'typeBackgroundGenerator',
})
export class TypeBackgroundGeneratorPipe implements PipeTransform {
  transform(types: Type[]): string {
    if (!types || types.length === 0) {
      return TYPE_INFO[0].type_color;
    }

    const numTypes = types.length;

    if (numTypes === 1) {
      const typeNumber1 = +types[0].type.url.split('/').slice(-2, -1)[0];
      return TYPE_INFO[typeNumber1].type_color;
    }

    if (types.length === 2) {
      const typeNumber1ID = +types[0].type.url.split('/').slice(-2, -1)[0];
      const typeNumber2ID = +types[1].type.url.split('/').slice(-2, -1)[0];

      return `linear-gradient(to bottom right, ${TYPE_INFO[typeNumber1ID].darker_type_color}, ${TYPE_INFO[typeNumber2ID].type_color})`;
    }

    return 'linear-gradient(to bottom right, #AAAA99, #AAAA99)';
  }
}
