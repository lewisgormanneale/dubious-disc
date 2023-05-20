import { Component, Input } from '@angular/core';
import { PokemonStat } from 'src/app/core/models';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  @Input() stats?: PokemonStat[];

  constructor() {}

  getFormattedStatName(stat: PokemonStat) {
    switch (stat.stat.name) {
      case 'hp':
        stat.formatted_name = 'HP';
        break;
      case 'attack':
        stat.formatted_name = 'Attack';
        break;
      case 'defense':
        stat.formatted_name = 'Defense';
        break;
      case 'special-attack':
        stat.formatted_name = 'Special Attack';
        break;
      case 'special-defense':
        stat.formatted_name = 'Special Defense';
        break;
      case 'speed':
        stat.formatted_name = 'Speed';
        break;
      default:
        break;
    }
    return stat.formatted_name;
  }

  getProgressBarStyle(base_stat: number) {
    return { width: (base_stat / 255) * 100 + '%' };
  }
}
