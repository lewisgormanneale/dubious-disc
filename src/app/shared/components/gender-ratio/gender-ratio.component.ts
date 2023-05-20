import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gender-ratio',
  templateUrl: './gender-ratio.component.html',
  styleUrls: ['./gender-ratio.component.scss'],
})
export class GenderRatioComponent {
  @Input() rate: number = 0;

  getProgressBarClass(rate: number) {
    if (rate === -1) {
      return 'bg-success';
    } else if (rate === 8) {
      return 'bg-primary';
    } else {
      return 'bg-info';
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
