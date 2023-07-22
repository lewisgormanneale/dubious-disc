import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  PokemonDetails,
  PokemonEntry,
  PokemonSpeciesDetails,
} from 'src/app/core/models';
import { PokedexService } from 'src/app/core/services/pokedex.service';

@Component({
  selector: 'app-team-planner-item',
  templateUrl: './team-planner-item.component.html',
  styleUrls: ['./team-planner-item.component.scss'],
})
export class TeamPlannerItemComponent implements OnInit {
  @Input() pokemon: PokemonEntry = {} as PokemonEntry;
  @Output() removePokemonFromTeam = new EventEmitter<PokemonEntry>();
  pokemonDetails: PokemonDetails = {} as PokemonDetails;
  pokemonSpeciesDetails: PokemonSpeciesDetails = {} as PokemonSpeciesDetails;
  localisedPokemonName: string = '';
  pokemonID: string = '';
  imageURL: string = '';
  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    if (this.pokemon.pokemon_species) {
      this.pokemonID = this.pokemon.pokemon_species.url
        .split('/')
        .slice(-2, -1)[0];
      this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`;
      this.pokedexService
        .getPokemonSpeciesDetails(this.pokemon.pokemon_species.name)
        .subscribe((pokemonSpeciesDetails) => {
          this.pokemonSpeciesDetails = pokemonSpeciesDetails;
          this.localisedPokemonName =
            this.pokedexService.getPokemonNameByLanguage(
              this.pokemonSpeciesDetails.names!,
              'en'
            );
        });
      this.pokedexService
        .getPokemonDetails(this.pokemon.pokemon_species.name)
        .subscribe((pokemonDetails) => {
          this.pokemonDetails = pokemonDetails;
        });
    }
  }
}
