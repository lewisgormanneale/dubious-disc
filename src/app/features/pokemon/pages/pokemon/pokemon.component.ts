import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';
import { Location } from '@angular/common';
import { forkJoin, Observable, tap } from 'rxjs';
import { Pokemon, PokemonSpecies, PokemonType } from 'src/app/core/models';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: any = {
    name: '',
    url: '',
    id: '',
    details: {},
    species_details: {},
  };
  localisedPokemonName: string = '';
  canGoBack: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeAPIService: PokeAPIService,
    private location: Location
  ) {
    this.canGoBack = !!this.router.getCurrentNavigation()?.previousNavigation;
  }

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
      if (this.pokemon.species_details?.names) {
        this.localisedPokemonName =
          this.pokeAPIService.getPokemonNameByLanguage(
            this.pokemon.species_details.names,
            'en'
          );
      }
    });
  }

  getPokemon(pokemonID: string, pokemonSpecies: any): Observable<Pokemon> {
    return this.pokeAPIService.getPokemonById(pokemonID).pipe(
      tap((details: Pokemon) => {
        pokemonSpecies.details = details;
      })
    );
  }

  getPokemonSpecies(
    pokemonID: string,
    pokemonSpecies: any
  ): Observable<PokemonSpecies> {
    return this.pokeAPIService.getPokemonSpeciesById(pokemonID).pipe(
      tap((pokemonSpeciesDetails: PokemonSpecies) => {
        pokemonSpecies.species_details = pokemonSpeciesDetails;
      })
    );
  }

  getTypeBoxLayout(types: PokemonType[]) {
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
