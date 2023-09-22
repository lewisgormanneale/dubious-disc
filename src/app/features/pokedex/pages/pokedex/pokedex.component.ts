import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';
import {
  Pokedex,
  PokedexVersion,
  PokedexVersions,
  PokemonEntry,
} from 'src/app/core/models/index';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  public pokedexVersions = PokedexVersions;
  public isMenuCollapsed: boolean = true;

  public pokedex: Pokedex = {} as Pokedex;
  public pokedexID: number = 1;
  public selectedVersion: PokedexVersion = {} as PokedexVersion;
  public pokemonEntries: PokemonEntry[];

  public teamPlannerMode: boolean = false;
  public pokemonTeam: PokemonEntry[] = [] as PokemonEntry[];

  constructor(
    private pokeAPIService: PokeAPIService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pokemonEntries = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const urlValue = params.get('id') || 'national';
      const version = this.pokedexVersions.find(
        (version) => version.slug === urlValue
      );
      if (version) {
        this.selectedVersion = version;
      }
      this.pokedexID = this.selectedVersion
        ? this.selectedVersion.pokedexID
        : 1;
      this.getAllPokemon();
    });
  }

  getAllPokemon(): void {
    this.pokeAPIService
      .getPokedexById(this.pokedexID)
      .subscribe((pokedex: Pokedex) => {
        this.pokemonEntries = pokedex.pokemon_entries.map((entry) => {
          return {
            entry_number: entry.entry_number,
            pokemon_species: {
              name: entry.pokemon_species.name,
              url: entry.pokemon_species.url,
            },
          };
        });
      });
  }

  navigateToVersionSelect() {
    this.router.navigate(['/pokedex']);
  }

  toggleTeamPlannerMode(): void {
    this.teamPlannerMode = !this.teamPlannerMode;
  }

  onPokemonClick(pokemon: PokemonEntry) {
    if (this.teamPlannerMode) {
      this.addToTeamPlanner(pokemon);
    } else {
      let pokemonID = pokemon.pokemon_species.url.split('/').slice(-2, -1)[0];
      this.router.navigate(['/pokemon/', pokemonID]);
    }
  }

  addToTeamPlanner(pokemon: PokemonEntry) {
    // Check if the Pokemon is not already in the team planner
    if (this.pokemonTeam.length < 6) {
      this.pokemonTeam.push(pokemon);
    } else {
      // If the Pokemon is already in the team planner, you could show some error message or handle it as per your requirements.
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
