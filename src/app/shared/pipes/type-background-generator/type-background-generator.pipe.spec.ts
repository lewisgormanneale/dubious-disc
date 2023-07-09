import { TypeBackgroundGeneratorPipe } from './type-background-generator.pipe';
import { Type, TYPE_INFO } from 'src/app/core/models/types.model';

describe('TypeBackgroundGeneratorPipe', () => {
  let pipe: TypeBackgroundGeneratorPipe;

  beforeEach(() => {
    pipe = new TypeBackgroundGeneratorPipe();
  });

  it('should return the first type color when no types are passed in', () => {
    const result = pipe.transform([]);
    expect(result).toEqual(TYPE_INFO[0].type_color);
  });

  it('should return the correct type color for a single type', () => {
    const types: Type[] = [
      {
        slot: 1,
        type: { name: 'test', url: 'https://pokeapi.co/api/v2/type/1/' },
      },
    ];
    const result = pipe.transform(types);
    const typeNumber1 = +types[0].type.url.split('/').slice(-2, -1)[0];
    expect(result).toEqual(TYPE_INFO[typeNumber1].type_color);
  });

  it('should return the correct gradient for two types', () => {
    const types: Type[] = [
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
    const expectedColor = `linear-gradient(to bottom right, ${TYPE_INFO[typeNumber1ID].darker_type_color}, ${TYPE_INFO[typeNumber2ID].type_color})`;
    expect(result).toEqual(expectedColor);
  });

  it('should return the default gradient for more than two types', () => {
    const types: Type[] = [
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
