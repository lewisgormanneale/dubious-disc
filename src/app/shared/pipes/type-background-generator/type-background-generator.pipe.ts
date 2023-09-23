import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from 'src/app/core/models';
import { AllPokemonTypeValues } from 'src/app/shared/types';

@Pipe({
  name: 'typeBackgroundGenerator',
})
export class TypeBackgroundGeneratorPipe implements PipeTransform {
  transform(types: PokemonType[]): string {
    if (!types || types.length === 0) {
      return AllPokemonTypeValues[0].type_color;
    }

    const numTypes = types.length;

    if (numTypes === 1) {
      const typeNumber1 = +types[0].type.url.split('/').slice(-2, -1)[0];
      return AllPokemonTypeValues[typeNumber1].type_color;
    }

    if (types.length === 2) {
      const typeNumber1ID = +types[0].type.url.split('/').slice(-2, -1)[0];
      const typeNumber2ID = +types[1].type.url.split('/').slice(-2, -1)[0];

      return `linear-gradient(to bottom right, ${AllPokemonTypeValues[typeNumber1ID].darker_type_color}, ${AllPokemonTypeValues[typeNumber2ID].type_color})`;
    }

    return 'linear-gradient(to bottom right, #AAAA99, #AAAA99)';
  }
}
