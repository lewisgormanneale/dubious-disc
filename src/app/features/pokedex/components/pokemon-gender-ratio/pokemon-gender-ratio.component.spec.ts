import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonGenderRatioComponent } from './pokemon-gender-ratio.component';
import { getByTestId } from '@testing-library/dom';

describe('PokemonGenderRatioComponent', () => {
  let component: PokemonGenderRatioComponent;
  let fixture: ComponentFixture<PokemonGenderRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonGenderRatioComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonGenderRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When the rate is is not -1, 0, or 8', () => {
    let genderRatioBar: HTMLElement;
    beforeEach(() => {
      component.rate = 5;
      fixture.detectChanges();
      genderRatioBar = getByTestId(fixture.nativeElement, 'gender-ratio-bar');
    });

    it('Then the gender ratio bar should render with the correct classes', () => {
      expect(genderRatioBar.classList.contains('bg-male')).toBe(true);
    });

    it('Then the gender ratio bar should render with the correct width', () => {
      expect(genderRatioBar.style.width).toBe('37.5%');
    });
  });

  describe('When the rate is 0 (always male)', () => {
    let genderRatioBar: HTMLElement;
    beforeEach(() => {
      component.rate = 0;
      fixture.detectChanges();
      genderRatioBar = getByTestId(fixture.nativeElement, 'gender-ratio-bar');
    });

    it('Then the gender ratio bar should render with the correct classes', () => {
      expect(
        genderRatioBar.classList.contains('bg-male') &&
          genderRatioBar.classList.contains('rounded-r')
      ).toBe(true);
    });

    it('Then the gender ratio bar should render with the correct width', () => {
      expect(genderRatioBar.style.width).toBe('100%');
    });
  });

  describe('When the rate is 8 (always female)', () => {
    let genderRatioBar: HTMLElement;
    beforeEach(() => {
      component.rate = 8;
      fixture.detectChanges();
      genderRatioBar = getByTestId(fixture.nativeElement, 'gender-ratio-bar');
    });

    it('Then the gender ratio bar should render with the correct classes', () => {
      expect(
        genderRatioBar.classList.contains('bg-female') &&
          genderRatioBar.classList.contains('rounded-r')
      ).toBe(true);
    });

    it('Then the gender ratio bar should render with the correct width', () => {
      expect(genderRatioBar.style.width).toBe('100%');
    });
  });

  describe('When the rate is -1 (genderless)', () => {
    let genderRatioBar: HTMLElement;
    beforeEach(() => {
      component.rate = -1;
      fixture.detectChanges();
      genderRatioBar = getByTestId(fixture.nativeElement, 'gender-ratio-bar');
    });

    it('Then the gender ratio bar should render with the correct classes', () => {
      expect(
        genderRatioBar.classList.contains('bg-genderless') &&
          genderRatioBar.classList.contains('rounded-r')
      ).toBe(true);
    });

    it('Then the gender ratio bar should render with the correct width', () => {
      expect(genderRatioBar.style.width).toBe('100%');
    });
  });
});
