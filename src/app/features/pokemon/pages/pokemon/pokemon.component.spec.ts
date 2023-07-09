import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponent } from './pokemon.component';
import { PokemonModule } from '../../pokemon.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  const testData = {
    id: '15',
    name: 'beedrill',
    url: 'https://pokeapi.co/api/v2/pokemon/15/',
    details: {
      height: 10,
      weight: 295,
    },
    species_details: {
      names: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          language: {
            name: 'en',
            url: '',
          },
          name: 'Beedrill',
        },
      ],
    },
  };

  const emptyTestData = {
    id: '',
    name: '',
    url: '',
    details: {
      height: 0,
      weight: 0,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, PokemonModule],
      declarations: [PokemonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.pokemon = testData;
    expect(component).toBeTruthy();
  });

  it('should display pokemon details', () => {
    component.pokemon = testData;
    fixture.detectChanges();

    const name =
      fixture.debugElement.nativeElement.querySelector('.pokemon-name');
    const id = fixture.debugElement.nativeElement.querySelector('.pokemon-id');
    const height =
      fixture.debugElement.nativeElement.querySelectorAll('.pokemon-detail')[1];
    const weight =
      fixture.debugElement.nativeElement.querySelectorAll('.pokemon-detail')[2];

    expect(name.textContent).toContain('Beedrill');
    expect(id.textContent).toContain(`#${testData.id}`);
    expect(height.textContent).toContain(`Height: 3'03"`);
    expect(weight.textContent).toContain(`Weight: 65.0 lbs`);
  });
});
