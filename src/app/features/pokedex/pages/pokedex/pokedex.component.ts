import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { Tab, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  public listView: boolean = false;
  public versionGroupIdentifier: string = '';
  public formattedVersionGroupName: string = '';

  public pokedexes: Tables<'pokedexes'>[] = [];
  public selectedPokedex: Tables<'pokedexes'> = {} as Tables<'pokedexes'>;
  public versionGroup: Tables<'version_groups'> =
    {} as Tables<'version_groups'>;

  private supabase: SupabaseService = inject(SupabaseService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.versionGroupIdentifier = params.get('version-group') || '';
          return this.supabase.getVersionGroupByIdentifier(
            this.versionGroupIdentifier
          );
        }),
        switchMap((versionGroup) => {
          this.versionGroup = versionGroup;
          return this.supabase.getPokedexesByVersionGroupId(versionGroup.id);
        })
      )
      .subscribe((data: Tables<'pokedexes'>[]) => {
        this.pokedexes = data;
        this.selectedPokedex = data[0];
      });
  }

  get pokedexTabs() {
    return this.pokedexes.map((pokedex) => ({
      name: pokedex.name,
      identifier: pokedex.identifier,
    }));
  }

  selectTab(tab: Tab) {
    this.selectedPokedex =
      this.pokedexes.find((pokedex) => pokedex.identifier === tab.identifier) ||
      this.pokedexes[0];
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
