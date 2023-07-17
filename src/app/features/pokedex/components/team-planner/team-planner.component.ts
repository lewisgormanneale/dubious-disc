import { Component, Input } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';

@Component({
  selector: 'app-team-planner',
  templateUrl: './team-planner.component.html',
  styleUrls: ['./team-planner.component.scss'],
})
export class TeamPlannerComponent {
  @Input() pokemon: PokemonEntry = {} as PokemonEntry;
  constructor() {}

  ngOnInit(): void {}
}
