import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokedexModule } from '../../pokedex.module';

import { PokedexComponent } from './pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexModule, RouterTestingModule],
      declarations: [PokedexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pokedexEntrySearch on component initialization', () => {
    expect(component.pokedexEntrySearch).toBeDefined();
  });

  it('should set isMenuCollapsed to true by default', () => {
    expect(component.isMenuCollapsed).toBeTrue();
  });

  it('should toggle isMenuCollapsed when the navbar-toggler is clicked', () => {
    const button = fixture.nativeElement.querySelector('.navbar-toggler');
    button.click();
    expect(component.isMenuCollapsed).toBeFalse();
    button.click();
    expect(component.isMenuCollapsed).toBeTrue();
  });

  it('should disable the Go button if model entry_number is 0', () => {
    component.model = {
      entry_number: 0,
      pokemon_species: { name: '', url: '' },
    };
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.btn-outline-success');
    expect(button.disabled).toBeTrue();
  });
});
