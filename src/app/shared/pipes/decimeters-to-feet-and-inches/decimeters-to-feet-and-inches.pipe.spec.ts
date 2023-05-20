import { DecimetersToFeetAndInchesPipe } from './decimeters-to-feet-and-inches.pipe';

describe('DecimetersToFeetAndInchesPipe', () => {
  let pipe: DecimetersToFeetAndInchesPipe;

  beforeEach(() => {
    pipe = new DecimetersToFeetAndInchesPipe();
  });

  it('should return "-" when given undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe('-');
  });

  it('should return "55\'09" when given 170', () => {
    const result = pipe.transform(170);
    expect(result).toBe('55\'09"');
  });

  it('should return "65\'00" when given 198', () => {
    const result = pipe.transform(198);
    expect(result).toBe('65\'00"');
  });

  it('should return "32\'10" when given 100', () => {
    const result = pipe.transform(100);
    expect(result).toBe('32\'10"');
  });
});
