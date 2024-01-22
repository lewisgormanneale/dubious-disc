import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let onClickSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    onClickSpy = jest.spyOn(component.onClick, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.primary).toBeFalsy();
    expect(component.backgroundColor).toBeUndefined();
    expect(component.size).toBe('medium');
    expect(component.label).toBe('Button');
  });

  it('should emit onClick event', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
});
