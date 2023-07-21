import { Component, Input, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';
import { PokedexService } from 'src/app/core/services/pokedex.service';

@Component({
  selector: 'app-team-planner-item',
  templateUrl: './team-planner-item.component.html',
  styleUrls: ['./team-planner-item.component.scss'],
})
export class TeamPlannerItemComponent implements OnInit {
  @Input() pokemon: PokemonEntry = {} as PokemonEntry;
  localisedPokemonName: string = '';
  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    if (this.pokemon.pokemon_species.species_details?.names) {
      this.localisedPokemonName = this.pokedexService.getPokemonNameByLanguage(
        this.pokemon.pokemon_species.species_details.names,
        'en'
      );
    }
  }
}
