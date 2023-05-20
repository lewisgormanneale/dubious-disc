import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should display the type name', () => {
    const typeName = 'Normal';
    component.type = {
      slot: 1,
      type: { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.fw-bold');
    expect(element.textContent).toContain(typeName);
  });

  it('should set the background color', () => {
    const typeID = 1;
    component.type = {
      slot: typeID,
      type: { name: 'Normal', url: 'https://pokeapi.co/api/v2/type/1/' },
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.type-box');
    expect(element.style.background).toBe('rgb(170, 170, 153)');
  });
});
