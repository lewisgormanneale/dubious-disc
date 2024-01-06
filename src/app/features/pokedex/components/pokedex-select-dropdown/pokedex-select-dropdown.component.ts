import { Component, Input, inject } from '@angular/core';
import { concatMap, map, tap } from 'rxjs';
import { DropdownLinkSection, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokedex-select-dropdown',
  templateUrl: './pokedex-select-dropdown.component.html',
})
export class PokedexSelectDropdownComponent {
  @Input() selectedPokemonSpeciesId: number = 0;
  public sections: DropdownLinkSection[] = [
    {
      name: 'General',
      options: [
        {
          name: 'National',
          path: '/pokedex/national',
        },
      ],
    },
  ];
  public versionGroups: Tables<'version_groups'>[] = [];
  public generations: Tables<'generations'>[] = [];
  public versionGroupsWithPokedexes: Set<number> = new Set();
  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    if (!this.selectedPokemonSpeciesId) {
      this.getAllPokedexSections();
    }
  }

  getAllPokedexSections(): void {
    let versionGroupIds: number[] = [];
    this.supabase
      .getAllVersionGroups()
      .pipe(
        tap((versionGroups) => {
          this.versionGroups = versionGroups;
          versionGroupIds = versionGroups.map((item: any) => item.id);
        }),
        concatMap(() => this.supabase.getAllGenerations()),
        tap((generations) => {
          this.generations = generations.reverse();
        }),
        concatMap(() => this.supabase.getAllPokedexVersionGroups()),
        map((pokedexVersionGroups) =>
          pokedexVersionGroups.filter(
            (pokedexVersionGroup: Tables<'pokedex_version_groups'>) =>
              versionGroupIds.includes(pokedexVersionGroup.version_group_id)
          )
        )
      )
      .subscribe((versionGroupsWithPokedexes) => {
        this.versionGroupsWithPokedexes = new Set(
          versionGroupsWithPokedexes.map((item) => item.version_group_id)
        );
        const newSections = this.generations.map((generation) => {
          return {
            name: generation.name ? generation.name : '',
            options: this.getVersionGroupsByGenerationId(generation.id).map(
              (versionGroup) => {
                return {
                  name: versionGroup.name,
                  path: `/pokedex/${versionGroup.identifier}`,
                };
              }
            ),
          };
        });
        this.sections.push(...newSections);
      });
  }

  getVersionGroupsByGenerationId(id: number): Tables<'version_groups'>[] {
    return this.versionGroups.filter(
      (versionGroup): boolean =>
        versionGroup.generation_id === id &&
        this.versionGroupsWithPokedexes.has(versionGroup.id)
    );
  }
}
