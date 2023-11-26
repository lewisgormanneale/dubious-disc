import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';
import {
  NamedAPIResource,
  Pokedex,
  PokemonEntry,
  VersionGroup,
} from 'src/app/core/models/index';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, Subject, switchMap } from 'rxjs';
import { getFormattedVersionGroupName } from 'src/app/shared/utils/games.utils';
import { getFormattedPokedexName } from 'src/app/shared/utils/pokedexes.utils';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  public isMenuCollapsed: boolean = true;

  public pokedexes: Pokedex[] = [] as Pokedex[];
  public urlValue: string = '';
  public formattedVersionGroupName: string = '';
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private pokeAPIService: PokeAPIService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.urlValue = params.get('id') || '';
      this.formattedVersionGroupName = getFormattedVersionGroupName(
        this.urlValue
      );
      this.pokeAPIService
        .getVersionGroupByName(this.urlValue)
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

  getFormattedPokedexName(pokedexName: string): string {
    return getFormattedPokedexName(pokedexName);
  }

  getAllPokedexes(pokedexes: NamedAPIResource[]): Observable<Pokedex[]> {
    const requests = pokedexes.map((pokedex: NamedAPIResource) => {
      return this.pokeAPIService.getPokedexByName(pokedex.name);
    });

    return forkJoin(requests);
  }

  navigateToVersionSelect() {
    this.router.navigate(['/pokedex']);
  }

  onPokemonClick(pokemon: PokemonEntry) {
    let pokemonID = pokemon.pokemon_species.url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/pokemon/', pokemonID]);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
