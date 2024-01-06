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
  @Input() selectedPokemonSpeciesIdentifier: string = '';
  @Input() currentVersionGroupName: string = '';

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
  public placeholder: string = 'Select Pokedex';

  public versionGroups: Tables<'version_groups'>[] = [];
  public versionGroupsWithPokedexes: Set<number> = new Set();

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    if (
      this.selectedPokemonSpeciesId &&
      this.selectedPokemonSpeciesIdentifier
    ) {
      this.getPokedexVersionGroupsWithPokemonAvailable();
    } else {
      this.getAllPokedexVersionGroups();
    }
  }

  getAllPokedexVersionGroups(): void {
    let versionGroupIds: number[] = [];
    let generations: Tables<'generations'>[] = [];
    this.supabase
      .getAllVersionGroups()
      .pipe(
        tap((versionGroups) => {
          this.versionGroups = versionGroups;
          versionGroupIds = versionGroups.map((item: any) => item.id);
        }),
        concatMap(() => this.supabase.getAllGenerations()),
        tap((data) => {
          generations = data.reverse();
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
        const newSections = generations.map((generation) => {
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

  getPokedexVersionGroupsWithPokemonAvailable(): void {
    let versionGroupIds: number[] = [];
    let generations: Tables<'generations'>[] = [];
    this.supabase
      .getAllVersionGroups()
      .pipe(
        tap((versionGroups) => {
          this.versionGroups = versionGroups;
          versionGroupIds = versionGroups.map((item: any) => item.id);
        }),
        concatMap(() => this.supabase.getAllGenerations()),
        tap((data) => {
          generations = data.reverse();
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
        const newSections = generations.map((generation) => {
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
