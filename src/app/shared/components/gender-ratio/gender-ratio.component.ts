import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gender-ratio',
  templateUrl: './gender-ratio.component.html',
  styleUrls: ['./gender-ratio.component.css'],
})
export class GenderRatioComponent {
  @Input() rate: number = 0;

  getProgressBarClass(rate: number) {
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

  getProgressBarStyle(rate: number) {
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
