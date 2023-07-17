import { Component, Input, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';
import { PokedexService } from 'src/app/core/services/pokedex.service';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  styleUrls: ['./pokedex-list-item.component.scss'],
})
export class PokedexListItemComponent implements OnInit {
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
