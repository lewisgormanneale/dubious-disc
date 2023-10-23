import { TypeBackgroundGeneratorPipe } from './type-background-generator.pipe';
import { PokemonType } from 'src/app/core/models/index';
import { AllPokemonTypeValues } from 'src/app/shared/utils/types.utils';

describe('TypeBackgroundGeneratorPipe', () => {
  let pipe: TypeBackgroundGeneratorPipe;

  beforeEach(() => {
    pipe = new TypeBackgroundGeneratorPipe();
  });

  it('should return the first type color when no types are passed in', () => {
    const result = pipe.transform([]);
    expect(result).toEqual(AllPokemonTypeValues[0].darker_type_color);
  });

  it('should return the correct type color for a single type', () => {
    const types: PokemonType[] = [
      {
        slot: 1,
        type: { name: 'test', url: 'https://pokeapi.co/api/v2/type/1/' },
      },
    ];
    const result = pipe.transform(types);
    const typeNumber1 = +types[0].type.url.split('/').slice(-2, -1)[0];
    expect(result).toEqual(AllPokemonTypeValues[typeNumber1].darker_type_color);
  });

  it('should return the correct gradient for two types', () => {
    const types: PokemonType[] = [
      {
        slot: 1,
        type: { name: 'test', url: 'https://pokeapi.co/api/v2/type/1/' },
      },
      {
        slot: 2,
        type: { name: 'test', url: 'https://pokeapi.co/api/v2/type/2/' },
      },
    ];
    const result = pipe.transform(types);
    const typeNumber1ID = +types[0].type.url.split('/').slice(-2, -1)[0];
    const typeNumber2ID = +types[1].type.url.split('/').slice(-2, -1)[0];
    const expectedColor = `linear-gradient(to bottom right, ${AllPokemonTypeValues[typeNumber1ID].darker_type_color}, ${AllPokemonTypeValues[typeNumber2ID].darker_type_color})`;
    expect(result).toEqual(expectedColor);
  });

  it('should return the default gradient for more than two types', () => {
    const types: PokemonType[] = [
      {
        slot: 1,
        type: { name: 'test', url: 'https://pokeapi.co/api/v2/type/1/' },
      },
      {
        slot: 2,
        type: { name: 'test', url: 'https://pokeapi.co/api/v2/type/2/' },
      },
      {
        slot: 3,
        type: { name: 'test', url: 'https://pokeapi.co/api/v2/type/3/' },
      },
    ];
    const result = pipe.transform(types);
    const expectedColor = 'linear-gradient(to bottom right, #AAAA99, #AAAA99)';
    expect(result).toEqual(expectedColor);
  });
});
