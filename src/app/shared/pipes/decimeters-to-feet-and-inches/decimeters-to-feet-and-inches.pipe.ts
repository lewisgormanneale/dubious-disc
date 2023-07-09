import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimetersToFeetAndInches',
})
export class DecimetersToFeetAndInchesPipe implements PipeTransform {
  transform(heightInDecimeters?: number): string {
    if (!heightInDecimeters) {
      return '-';
    }
    const inches = Math.round(heightInDecimeters * 3.937);
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;
    return `${feet}'${
      remainingInches.toString().length === 1 ? 0 : ''
    }${remainingInches}"`;
  }
}
