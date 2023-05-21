import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import {
  Pokedex,
  PokemonSpecies,
  PokemonDetails,
  PokemonSpeciesDetails,
  PokemonEntry,
} from 'src/app/core/models/index';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
} from 'rxjs';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  constructor(
    private pokedexService: PokedexService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  pokemonEntries: PokemonEntry[] = {} as PokemonEntry[];
  model: PokemonEntry = {
    entry_number: 0,
    pokemon_species: {
      name: '',
      url: '',
    },
  };
  formatter = (pokemon: PokemonEntry) => pokemon.pokemon_species.name;
  search: OperatorFunction<
    string,
    readonly { entry_number: number; pokemon_species: PokemonSpecies }[]
  > = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.pokemonEntries
          .filter((pokemon) =>
            new RegExp(term, 'mi').test(pokemon.pokemon_species.name)
          )
          .slice(0, 10)
      )
    );

  pokedex: Pokedex = {
    descriptions: [],
    id: 0,
    is_main_series: false,
    name: '',
    names: [],
    pokemon_entries: [],
    region: {},
    version_groups: [],
  };

  pokedexNumber: number = 1;
  pageNumber: number = 1;
  totalPages: number = 0;
  offset: number = 50;
  titleCasePipe = new TitleCasePipe();

  getAllPokemon(): void {
    this.pokedexService.getPokedex(1).subscribe((pokedex: Pokedex) => {
      this.pokemonEntries = pokedex.pokemon_entries.map((entry) => {
        // Capitalize the first letter of each word in a Pokemon's name
        return {
          entry_number: entry.entry_number,
          pokemon_species: {
            name: this.titleCasePipe.transform(entry.pokemon_species.name),
            url: entry.pokemon_species.url,
          },
        };
      });
    });
  }

  getPokedex(pageNumber: number, pokedexNumber: number): void {
    this.router.navigate([], { queryParams: { page: pageNumber } });

    const startIndex = (pageNumber - 1) * this.offset;
    const endIndex = startIndex + this.offset;

    this.pokedexService
      .getPokedex(pokedexNumber)
      .subscribe((pokedex: Pokedex) => {
        this.totalPages = Math.ceil(
          pokedex.pokemon_entries.length / this.offset
        );
        this.pokedex.pokemon_entries = pokedex.pokemon_entries.slice(
          startIndex,
          endIndex
        );
        this.pokedex.pokemon_entries.forEach((pokemon: PokemonEntry) => {
          let pokemonID = pokemon.pokemon_species.url
            .split('/')
            .slice(-2, -1)[0];
          this.getPokemonSpeciesDetails(pokemonID, pokemon.pokemon_species);
          this.getPokemonDetails(pokemonID, pokemon.pokemon_species);
        });
      });
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

  //Dynamically generate an array that can is used to generate the pagination buttons with *ngFor
  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  isPageNumberNearby(page: number, threshold: number): boolean {
    const distance = Math.abs(this.pageNumber - page);
    return distance < threshold;
  }

  onSubmit(): void {
    let pokemonID = this.model.pokemon_species.url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/pokemon/', pokemonID]);
  }

  ngOnInit(): void {
    this.getAllPokemon();
    this.route.paramMap.subscribe((params) => {
      this.pokedexNumber = Number(params.get('id')) || 1;
      this.route.queryParamMap.subscribe((params) => {
        this.pageNumber = Number(params.get('page')) || 1;
        this.getPokedex(this.pageNumber, this.pokedexNumber);
      });
    });
  }
}
