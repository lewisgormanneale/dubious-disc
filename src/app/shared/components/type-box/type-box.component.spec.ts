import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getByTestId } from '@testing-library/dom';

import { TypeBoxComponent } from './type-box.component';

describe('TypeBoxComponent', () => {
  let component: TypeBoxComponent;
  let fixture: ComponentFixture<TypeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeBoxComponent);
    component = fixture.componentInstance;
    component.type = {
      slot: 1,
      type: { name: '', url: 'https://pokeapi.co/api/v2/type/1/' },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the background color', () => {
    component.type = {
      slot: 1,
      type: { name: 'Normal', url: 'https://pokeapi.co/api/v2/type/1/' },
    };
    fixture.detectChanges();
    const typeBox = getByTestId(fixture.nativeElement, 'type-box');
    expect(typeBox.style.background).toBe('rgb(170, 170, 153)');
  });

  it('should display the type name', () => {
    const typeName = 'Normal';
    component.type = {
      slot: 1,
      type: { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
    };
    fixture.detectChanges();
    const typeBoxText = getByTestId(fixture.nativeElement, 'type-box-text');
    expect(typeBoxText.textContent).toContain(typeName);
  });
});
