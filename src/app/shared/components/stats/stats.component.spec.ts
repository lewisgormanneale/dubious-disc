import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';
import { PokemonStat } from 'src/app/core/models/index';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format the name of the stats correctly', () => {
    const hpStat: PokemonStat = {
      stat: { name: 'hp', url: '' },
      base_stat: 80,
      effort: 0,
    };
    const specialAttackStat: PokemonStat = {
      stat: { name: 'special-attack', url: '' },
      base_stat: 100,
      effort: 0,
    };

    expect(component.getFormattedStatName(hpStat)).toEqual('HP');
    expect(component.getFormattedStatName(specialAttackStat)).toEqual(
      'Special Attack'
    );
  });

  it('should calculate the correct progress bar width', () => {
    const stat: PokemonStat = {
      stat: { name: 'hp', url: '' },
      base_stat: 80,
      effort: 0,
    };
    const progressBarWidth = component.getProgressBarStyle(
      stat.base_stat
    ).width;
    expect(progressBarWidth).toEqual('31.372549019607842%');
  });
});
