import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  public listView: boolean = false;
  public urlValue: string = '';
  public formattedVersionGroupName: string = '';

  public pokedexes: any = [];
  public versionGroup: Tables<'version_groups'> =
    {} as Tables<'version_groups'>;

  private supabase: SupabaseService = inject(SupabaseService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private ngUnsubscribe = new Subject<void>();

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
      .subscribe((data: Tables<'pokedexes'>[]) => {
        this.pokedexes = data;
        this.pokedexes.forEach((pokedex: any) => {
          this.supabase
            .getPokemonSpeciesByPokedexId(pokedex.id)
            .subscribe((data) => {
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
