import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent {
  @Input() pokemon?: any;
  @Input() pokemon_species?: any;
}
