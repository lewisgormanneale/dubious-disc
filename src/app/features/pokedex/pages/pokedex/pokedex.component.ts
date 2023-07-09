import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import {
  Pokedex,
  PokemonSpecies,
  PokemonDetails,
  PokemonSpeciesDetails,
  PokemonEntry,
} from 'src/app/core/models/index';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  takeUntil,
  Subject,
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

  pokedexVersions: { [key: number]: string } = {
    1: 'National',
    30: 'Legends: Arceus',
    9: 'Black 2/White 2',
    8: 'Black/White',
    7: 'HeartGold/SoulSilver',
    6: 'Platinum',
    5: 'Diamond/Pearl',
    4: 'Ruby/Sapphire/Emerald',
    3: 'Gold/Silver/Crystal',
    2: 'Red/Blue/Yellow',
  };

  isMenuCollapsed = true;

  pokedex: Pokedex = {} as Pokedex;
  loadedPokemonEntries: PokemonEntry[] = [] as PokemonEntry[];
  pokedexNumber: number = 1;
  pageNumber: number = 1;
  totalPages: number = 0;
  offset: number = 100;

  pokedexEntrySearch: PokemonEntry[] = {} as PokemonEntry[];
  model: PokemonEntry = {} as PokemonEntry;
  titleCasePipe = new TitleCasePipe();

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
        this.pokedexEntrySearch
          .filter((pokemon) =>
            new RegExp(term, 'mi').test(pokemon.pokemon_species.name)
          )
          .slice(0, 10)
      )
    );

  ngOnInit(): void {
    this.getAllPokemon();
    this.route.paramMap.subscribe((params) => {
      this.pokedexNumber = Number(params.get('id')) || 1;
      this.resetPagination();
      this.route.queryParamMap.subscribe((params) => {
        this.pageNumber = Number(params.get('page')) || 1;
        this.getPokedex();
      });
    });
  }

  onScroll(): void {
    this.pageNumber++;
    this.getPokedex();
  }

  getAllPokemon(): void {
    this.pokedexService.getPokedex(1).subscribe((pokedex: Pokedex) => {
      this.pokedexEntrySearch = pokedex.pokemon_entries.map((entry) => {
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
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(() => {
        this.loadedPokemonEntries = [];
        this.resetPagination();
      });
  }

  getPokedex(): void {
    const startIndex = (this.pageNumber - 1) * this.offset;
    const endIndex = startIndex + this.offset;
    this.pokedexService
      .getPokedex(this.pokedexNumber)
      .subscribe((pokedex: Pokedex) => {
        pokedex.pokemon_entries
          .slice(startIndex, endIndex)
          .forEach((pokemon: PokemonEntry) => {
            let pokemonID = pokemon.pokemon_species.url
              .split('/')
              .slice(-2, -1)[0];
            this.pokedexService
              .getPokemonSpeciesDetails(pokemonID)
              .subscribe((pokemonSpeciesDetails: PokemonSpeciesDetails) => {
                pokemon.pokemon_species.species_details = pokemonSpeciesDetails;
              });
            this.pokedexService
              .getPokemonDetails(pokemonID)
              .subscribe((details: PokemonDetails) => {
                pokemon.pokemon_species.details = details;
              });
            this.loadedPokemonEntries.push(pokemon);
          });
      });
  }

  onSubmit(): void {
    let pokemonID = this.model.pokemon_species.url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/pokemon/', pokemonID]);
  }

  private ngUnsubscribe = new Subject<void>();

  private resetPagination(): void {
    this.pageNumber = 1;
    this.totalPages = 0;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
