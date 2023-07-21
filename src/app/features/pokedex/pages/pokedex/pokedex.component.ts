import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import {
  Pokedex,
  pokedexVersions,
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
  public pokedexVersions = pokedexVersions;
  public isMenuCollapsed: boolean = true;

  public pokedex: Pokedex = {} as Pokedex;
  public pokedexID: number = 1;
  public selectedVersion: { key: number; value: string } = {
    key: 1,
    value: 'National',
  };
  public pokemonEntries: PokemonEntry[] = [] as PokemonEntry[];

  public teamPlannerMode: boolean = false;
  public pokemonTeam: PokemonEntry[] = [] as PokemonEntry[];

  constructor(
    private pokedexService: PokedexService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.pokedexID = Number(params.get('id')) || 1;
      this.getAllPokemon();
    });
  }

  getAllPokemon(): void {
    this.pokedexService
      .getPokedex(this.pokedexID)
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

  getPokedexTitle(): string {
    const selectedVersion = this.pokedexVersions.find(
      (version) => version.key === this.pokedexID
    );
    return selectedVersion ? selectedVersion.value : '';
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
