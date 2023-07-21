import { Component, Input } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';

@Component({
  selector: 'app-team-planner',
  templateUrl: './team-planner.component.html',
  styleUrls: ['./team-planner.component.scss'],
})
export class TeamPlannerComponent {
  @Input() pokemonTeam: Array<PokemonEntry> = [] as Array<PokemonEntry>;
  constructor() {}

  ngOnInit(): void {}

  getFirstRow(): PokemonEntry[] {
    return this.pokemonTeam.slice(0, 3);
  }

  getSecondRow(): PokemonEntry[] {
    return this.pokemonTeam.slice(3, 6);
  }
}
