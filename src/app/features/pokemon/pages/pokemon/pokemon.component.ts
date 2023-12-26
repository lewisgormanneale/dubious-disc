import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';
import { forkJoin, tap } from 'rxjs';
import { Pokemon, PokemonSpecies } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon = {} as Pokemon;
  pokemon_species: PokemonSpecies = {} as PokemonSpecies;
  localisedPokemonName: string = '';

  private supabase: SupabaseService = inject(SupabaseService);

  constructor(
    private route: ActivatedRoute,
    private pokeAPIService: PokeAPIService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getAllPokemonDetails(id);
    });
  }

  getAllPokemonDetails(id: string): void {
    forkJoin([
      this.pokeAPIService.getPokemonById(id).pipe(
        tap((details: Pokemon) => {
          this.pokemon = details;
        })
      ),
      this.pokeAPIService.getPokemonSpeciesById(id).pipe(
        tap((pokemonSpeciesDetails: PokemonSpecies) => {
          this.pokemon_species = pokemonSpeciesDetails;
        })
      ),
    ]).subscribe(() => {
      if (this.pokemon_species?.names) {
        this.localisedPokemonName =
          this.pokeAPIService.getPokemonNameByLanguage(
            this.pokemon_species.names,
            'en'
          );
      }
    });
  }
}
