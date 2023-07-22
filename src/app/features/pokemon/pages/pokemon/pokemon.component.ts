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
import { forkJoin, Observable, tap } from 'rxjs';

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
  localisedPokemonName: string = '';
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
    forkJoin([
      this.getPokemonDetails(id, this.pokemon),
      this.getPokemonSpeciesDetails(id, this.pokemon),
    ]).subscribe(() => {
      if (this.pokemon.species_details?.names) {
        this.localisedPokemonName =
          this.pokedexService.getPokemonNameByLanguage(
            this.pokemon.species_details.names,
            'en'
          );
      }
    });
  }

  getPokemonDetails(
    pokemonID: string,
    pokemonSpecies: PokemonSpecies
  ): Observable<PokemonDetails> {
    return this.pokedexService.getPokemonDetails(pokemonID).pipe(
      tap((details: PokemonDetails) => {
        pokemonSpecies.details = details;
      })
    );
  }

  getPokemonSpeciesDetails(
    pokemonID: string,
    pokemonSpecies: PokemonSpecies
  ): Observable<PokemonSpeciesDetails> {
    return this.pokedexService.getPokemonSpeciesDetails(pokemonID).pipe(
      tap((pokemonSpeciesDetails: PokemonSpeciesDetails) => {
        pokemonSpecies.species_details = pokemonSpeciesDetails;
      })
    );
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
      this.router.navigate(['pokedex/1']);
    }
  }
}
