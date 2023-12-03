import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';
import { Location } from '@angular/common';
import { forkJoin, Observable, tap } from 'rxjs';
import {
  CombinedPokemonEntry,
  Pokemon,
  PokemonSpecies,
  PokemonType,
} from 'src/app/core/models';
import { TypeBackgroundGeneratorPipe } from 'src/app/shared/pipes/type-background-generator/type-background-generator.pipe';
import { AllPokemonTypeValues } from 'src/app/shared/utils/types.utils';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  pokemon: CombinedPokemonEntry = {} as CombinedPokemonEntry;
  localisedPokemonName: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokeAPIService: PokeAPIService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.pokemon.id = id;
      this.getAllPokemonDetails(id);
    });
  }

  getAllPokemonDetails(id: string): void {
    forkJoin([
      this.getPokemon(id, this.pokemon),
      this.getPokemonSpecies(id, this.pokemon),
    ]).subscribe(() => {
      if (this.pokemon.pokemon_species_details?.names) {
        this.localisedPokemonName =
          this.pokeAPIService.getPokemonNameByLanguage(
            this.pokemon.pokemon_species_details.names,
            'en'
          );
      }
    });
  }

  getPokemon(pokemonID: string, pokemonSpecies: any): Observable<Pokemon> {
    return this.pokeAPIService.getPokemonById(pokemonID).pipe(
      tap((details: Pokemon) => {
        pokemonSpecies.pokemon_details = details;
      })
    );
  }

  getPokemonSpecies(
    pokemonID: string,
    pokemonSpecies: any
  ): Observable<PokemonSpecies> {
    return this.pokeAPIService.getPokemonSpeciesById(pokemonID).pipe(
      tap((pokemonSpeciesDetails: PokemonSpecies) => {
        pokemonSpecies.pokemon_species_details = pokemonSpeciesDetails;
      })
    );
  }

  getTypeBoxLayout(types: PokemonType[]) {
    return types.length > 1
      ? 'justify-content-between'
      : 'justify-content-center';
  }
}
