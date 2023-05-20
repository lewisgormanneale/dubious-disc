import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimetersToPounds',
})
export class DecimetersToPoundsPipe implements PipeTransform {
  transform(weightInDecimeters?: number): string {
    if (!weightInDecimeters) {
      return '-';
    }
    const pounds = weightInDecimeters * 0.220462;
    return `${pounds.toFixed(1)} lbs`;
  }
}
