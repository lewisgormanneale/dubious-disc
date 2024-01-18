import { Component, Input } from '@angular/core';

@Component({
  selector: 'dd-pokemon-gender-ratio',
  templateUrl: './pokemon-gender-ratio.component.html',
})
export class PokemonGenderRatioComponent {
  @Input() rate: number = 0;

  getGenderRatioBarClass(rate: number) {
    if (rate === -1) {
      return 'bg-genderless rounded-r';
    } else if (rate === 8) {
      return 'bg-female rounded-r';
    } else if (rate === 0) {
      return 'bg-male rounded-r';
    } else {
      return 'bg-male';
    }
  }

  getGenderRatioBarStyle(rate: number) {
    if (rate === -1) {
      return { width: '100%' };
    } else if (rate === 0) {
      return { width: '100%' };
    } else if (rate === 8) {
      return { width: '100%' };
    } else {
      return { width: 100 - rate * 12.5 + '%' };
    }
  }
}
