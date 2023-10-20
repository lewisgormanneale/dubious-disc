import { Component, Input } from '@angular/core';
import { CombinedPokemonEntry } from 'src/app/core/models';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent {
  @Input() pokemon?: CombinedPokemonEntry;
}
