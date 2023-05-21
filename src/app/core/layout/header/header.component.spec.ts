import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pokemonEntries on component initialization', () => {
    expect(component.pokemonEntries).toBeDefined();
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

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalled();
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
