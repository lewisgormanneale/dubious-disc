import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, forkJoin, switchMap, takeUntil } from 'rxjs';
import { DropdownSection, Tab, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  public listView: boolean = false;
  public versionGroupIdentifier: string = '';

  public pokedexes: Tables<'pokedexes'>[] = [];
  public selectedPokedex: Tables<'pokedexes'> = {} as Tables<'pokedexes'>;
  public versionGroup: Tables<'version_groups'> =
    {} as Tables<'version_groups'>;
  public dropdownSections: DropdownSection[] = [];

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
        this.getAllPokedexVersionGroups();
      });
  }

  getAllPokedexVersionGroups(): void {
    forkJoin({
      versionGroups: this.supabase.getAllVersionGroups(),
      generations: this.supabase.getAllGenerations(),
      pokedexVersionGroups: this.supabase.getAllPokedexVersionGroups(),
    })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(({ versionGroups, generations, pokedexVersionGroups }) => {
        const versionGroupIds = versionGroups.map((item: any) => item.id);
        let filteredPokedexVersionGroups = pokedexVersionGroups.filter(
          (pokedexVersionGroup: Tables<'pokedex_version_groups'>) =>
            versionGroupIds.includes(pokedexVersionGroup.version_group_id)
        );
        const versionGroupsWithPokedexes = new Set(
          filteredPokedexVersionGroups.map((item) => item.version_group_id)
        );

        this.dropdownSections = [
          ...generations.reverse().map((generation) => {
            return {
              name: generation.name ?? '',
              options: versionGroups
                .filter(
                  (versionGroup): boolean =>
                    versionGroup.generation_id === generation.id &&
                    versionGroupsWithPokedexes.has(versionGroup.id)
                )
                .map((versionGroup) => ({
                  name: versionGroup.name,
                  path: `/pokedex/${versionGroup.identifier}`,
                })),
            };
          }),
        ];
      });
  }

  get pokedexTabs() {
    return this.pokedexes.map((pokedex) => ({
      name: pokedex.name,
      identifier: pokedex.identifier,
    }));
  }

  toggleListView() {
    this.listView = !this.listView;
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
