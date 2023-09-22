import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';
import {
  APIPreview,
  Pokedex,
  PokedexVersion,
  PokedexVersions,
  PokemonEntry,
  VersionGroup,
} from 'src/app/core/models/index';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, Subject, switchMap } from 'rxjs';

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
  public pokedexes: any;
  public pokedexID: number = 1;
  public selectedVersion: PokedexVersion = {} as PokedexVersion;

  public teamPlannerMode: boolean = false;
  public pokemonTeam: PokemonEntry[] = [] as PokemonEntry[];

  constructor(
    private pokeAPIService: PokeAPIService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const urlValue = params.get('id') || 'national';
      this.pokeAPIService
        .getVersionGroupByName(urlValue)
        .pipe(
          switchMap((versionGroup: VersionGroup) => {
            return this.getAllPokedexes(versionGroup.pokedexes);
          })
        )
        .subscribe((pokedexes: Pokedex[]) => {
          this.pokedexes = pokedexes;
        });
    });
  }

  getAllPokedexes(pokedexes: APIPreview[]): Observable<Pokedex[]> {
    const requests = pokedexes.map((pokedex: APIPreview) => {
      return this.pokeAPIService.getPokedexByName(pokedex.name);
    });

    return forkJoin(requests);
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
