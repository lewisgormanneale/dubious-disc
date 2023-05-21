import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexModule } from '../../pokedex.module';

import { PokedexComponent } from './pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexModule],
      declarations: [PokedexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
