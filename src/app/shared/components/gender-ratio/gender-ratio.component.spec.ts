import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderRatioComponent } from './gender-ratio.component';

describe('GenderRatioComponent', () => {
  let component: GenderRatioComponent;
  let fixture: ComponentFixture<GenderRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenderRatioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenderRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize rate to 0', () => {
    expect(component.rate).toEqual(0);
  });

  it('should return the correct class when rate is -1', () => {
    const result = component.getProgressBarClass(-1);
    expect(result).toEqual('bg-success');
  });

  it('should return the correct class when rate is 8', () => {
    const result = component.getProgressBarClass(8);
    expect(result).toEqual('bg-primary');
  });

  it('should return the correct class when rate is not -1 or 8', () => {
    const result = component.getProgressBarClass(5);
    expect(result).toEqual('bg-info');
  });

  it('should return the correct style when rate is -1', () => {
    const result = component.getProgressBarStyle(-1);
    expect(result).toEqual({ width: '100%' });
  });

  it('should return the correct style when rate is 0', () => {
    const result = component.getProgressBarStyle(0);
    expect(result).toEqual({ width: '100%' });
  });

  it('should return the correct style when rate is 8', () => {
    const result = component.getProgressBarStyle(8);
    expect(result).toEqual({ width: '100%' });
  });

  it('should return the correct style when rate is not -1, 0, or 8', () => {
    const result = component.getProgressBarStyle(5);
    expect(result).toEqual({ width: '37.5%' }); // 100 - (5 * 12.5) = 37.5
  });

  it('should render the progress bar with the correct class', () => {
    component.rate = 8;
    fixture.detectChanges();
    const progressBar = fixture.nativeElement.querySelector('.progress-bar');
    expect(progressBar.classList.contains('bg-primary')).toBe(true);
  });

  it('should render the progress bar with the correct style', () => {
    component.rate = 5;
    fixture.detectChanges();
    const progressBar = fixture.nativeElement.querySelector('.progress-bar');
    expect(progressBar.style.width).toBe('37.5%');
  });
});
