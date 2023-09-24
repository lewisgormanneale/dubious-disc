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
    let formattedName = '';
    switch (stat.stat.name) {
      case 'hp':
        formattedName = 'HP';
        break;
      case 'attack':
        formattedName = 'Attack';
        break;
      case 'defense':
        formattedName = 'Defense';
        break;
      case 'special-attack':
        formattedName = 'Special Attack';
        break;
      case 'special-defense':
        formattedName = 'Special Defense';
        break;
      case 'speed':
        formattedName = 'Speed';
        break;
      default:
        break;
    }
    return formattedName;
  }

  getProgressBarStyle(base_stat: number) {
    return { width: (base_stat / 255) * 100 + '%' };
  }
}
