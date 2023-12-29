import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  public listView: boolean = false;
  public pokedexes: any[] = [];
  public versionGroup: any = {};
  public urlValue: string = '';
  public formattedVersionGroupName: string = '';
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private readonly supabase: SupabaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.urlValue = params.get('generation') || '';
          return this.supabase.getVersionGroupByIdentifier(this.urlValue);
        }),
        switchMap((versionGroup) => {
          this.versionGroup = versionGroup;
          return this.supabase.getPokedexesByVersionGroupId(versionGroup.id);
        })
      )
      .subscribe((data) => {
        this.pokedexes = data;
        this.pokedexes.forEach((pokedex: any) => {
          this.supabase.getPokemonByDexId(pokedex.id).subscribe((data) => {
            pokedex.pokemon_entries = data;
          });
        });
      });
  }

  onPokemonClick(pokemon: any) {
    let pokemonID = pokemon.species_id.identifier;
    this.router.navigate(['pokedex', this.urlValue, pokemonID]);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
