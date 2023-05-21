import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { Location } from '@angular/common';
import {
  PokemonSpecies,
  PokemonDetails,
  PokemonSpeciesDetails,
} from 'src/app/core/models/index';
import { Type } from 'src/app/core/models/types.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemon: PokemonSpecies = {
    name: '',
    url: '',
    id: '',
  };

  canGoBack: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokedexService: PokedexService,
    private location: Location
  ) {
    this.canGoBack = !!this.router.getCurrentNavigation()?.previousNavigation;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.pokemon.id = id;
      this.getPokemon(id);
    });
  }

  getPokemon(id: string): void {
    this.getPokemonDetails(id, this.pokemon);
    this.getPokemonSpeciesDetails(id, this.pokemon);
  }

  getPokemonSpeciesDetails(
    pokemonID: string,
    pokemonSpecies: PokemonSpecies
  ): void {
    this.pokedexService
      .getPokemonSpeciesDetails(pokemonID)
      .subscribe((pokemonSpeciesDetails: PokemonSpeciesDetails) => {
        pokemonSpecies.species_details = pokemonSpeciesDetails;
      });
  }

  getPokemonDetails(pokemonID: string, pokemonSpecies: PokemonSpecies): void {
    this.pokedexService
      .getPokemonDetails(pokemonID)
      .subscribe((details: PokemonDetails) => {
        pokemonSpecies.details = details;
      });
  }

  getTypeBoxLayout(types: Type[]) {
    return types.length > 1
      ? 'justify-content-between'
      : 'justify-content-center';
  }

  goBack(): void {
    if (this.canGoBack) {
      this.location.back();
    } else {
      // There's no previous navigation.
      this.router.navigate(['pokedex/1']);
    }
  }
}
