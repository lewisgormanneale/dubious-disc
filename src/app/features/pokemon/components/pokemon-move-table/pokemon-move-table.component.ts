import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-move-table',
  templateUrl: './pokemon-move-table.component.html',
})
export class PokemonMoveTableComponent {
  @Input() moveGroup: any = [] as any;
}
