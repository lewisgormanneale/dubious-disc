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
  pokemonID: string = '';
  imageURL: string = '';
  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokemonID = this.pokemon.pokemon_species.url
      .split('/')
      .slice(-2, -1)[0];
    this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`;
  }
}
