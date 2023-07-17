import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { Pokedex, PokemonEntry } from 'src/app/core/models/index';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil, Subject, forkJoin, tap } from 'rxjs';
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

  pokedexVersions: { key: number; value: string }[] = [
    { key: 1, value: 'National' },
    { key: 31, value: 'Scarlet/Violet' },
    { key: 30, value: 'Legends: Arceus' },
    { key: 29, value: 'Sword/Shield (Crown Tundra)' },
    { key: 28, value: 'Sword/Shield (Isle of Armor)' },
    { key: 27, value: 'Sword/Shield (Base)' },
    { key: 26, value: "Let's Go Pikachu/Eevee" },
    { key: 21, value: 'Ultra Sun/Ultra Moon' },
    { key: 16, value: 'Sun/Moon' },
    { key: 15, value: 'Omega Ruby/Alpha Sapphire' },
    { key: 14, value: 'X/Y (Mountain)' },
    { key: 13, value: 'X/Y (Coastal)' },
    { key: 12, value: 'X/Y (Central)' },
    { key: 9, value: 'Black 2/White 2' },
    { key: 8, value: 'Black/White' },
    { key: 7, value: 'HeartGold/SoulSilver' },
    { key: 6, value: 'Platinum' },
    { key: 5, value: 'Diamond/Pearl' },
    { key: 4, value: 'Ruby/Sapphire/Emerald' },
    { key: 3, value: 'Gold/Silver/Crystal' },
    { key: 2, value: 'Red/Blue/Yellow' },
  ];

  isMenuCollapsed = true;
  teamPlannerMode: boolean = false;

  pokedex: Pokedex = {} as Pokedex;
  pokemonEntries: PokemonEntry[] = [] as PokemonEntry[];
  loadedPokemonEntries: PokemonEntry[] = [] as PokemonEntry[];
  pokedexID: number = 1;
  selectedVersion: { key: number; value: string } = {
    key: 1,
    value: 'National',
  };
  pageNumber: number = 1;
  totalPages: number = 0;
  offset: number = 100;
  titleCasePipe = new TitleCasePipe();

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.pokedexID = Number(params.get('id')) || 1;
      this.pageNumber = Number(params.get('page')) || 1;
      this.resetPagination();
      this.getAllPokemon();
    });
  }

  onScroll(): void {
    this.pageNumber++;
    this.loadPokemonEntries();
  }

  getAllPokemon(): void {
    this.pokedexService
      .getPokedex(this.pokedexID)
      .subscribe((pokedex: Pokedex) => {
        this.pokemonEntries = pokedex.pokemon_entries.map((entry) => {
          return {
            entry_number: entry.entry_number,
            pokemon_species: {
              name: this.titleCasePipe.transform(entry.pokemon_species.name),
              url: entry.pokemon_species.url,
            },
          };
        });
        this.loadPokemonEntries();
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

  loadPokemonEntries(): void {
    const startIndex = (this.pageNumber - 1) * this.offset;
    const endIndex = startIndex + this.offset;

    const observables = this.pokemonEntries
      .slice(startIndex, endIndex)
      .map((pokemon) => {
        let pokemonID = pokemon.pokemon_species.url.split('/').slice(-2, -1)[0];
        const speciesDetails$ =
          this.pokedexService.getPokemonSpeciesDetails(pokemonID);
        const details$ = this.pokedexService.getPokemonDetails(pokemonID);

        return forkJoin([speciesDetails$, details$]).pipe(
          tap(([speciesDetails, details]) => {
            pokemon.pokemon_species.species_details = speciesDetails;
            pokemon.pokemon_species.details = details;
          })
        );
      });

    forkJoin(observables).subscribe(() => {
      this.loadedPokemonEntries.push(
        ...this.pokemonEntries.slice(startIndex, endIndex)
      );
    });
  }

  getPokedexTitle(): string {
    const selectedVersion = this.pokedexVersions.find(
      (version) => version.key === this.pokedexID
    );
    return selectedVersion ? selectedVersion.value : '';
  }

  toggleTeamPlannerMode(): void {
    this.teamPlannerMode = !this.teamPlannerMode;
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
