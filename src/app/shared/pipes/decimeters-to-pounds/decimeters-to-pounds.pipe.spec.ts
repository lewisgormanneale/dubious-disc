import { DecimetersToPoundsPipe } from './decimeters-to-pounds.pipe';

describe('DecimetersToPoundsPipe', () => {
  let pipe: DecimetersToPoundsPipe;

  beforeEach(() => {
    pipe = new DecimetersToPoundsPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform 0 decimeters to "-"', () => {
    expect(pipe.transform(0)).toBe('-');
  });

  it('should transform undefined to "-"', () => {
    expect(pipe.transform(undefined)).toBe('-');
  });

  it('should transform 1 decimeter to 0.2 pounds', () => {
    expect(pipe.transform(1)).toBe('0.2 lbs');
  });

  it('should transform 10 decimeters to 2.2 pounds', () => {
    expect(pipe.transform(10)).toBe('2.2 lbs');
  });

  it('should transform 50 decimeters to 11.0 pounds', () => {
    expect(pipe.transform(50)).toBe('11.0 lbs');
  });
});
