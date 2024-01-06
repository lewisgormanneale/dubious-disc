import { Component, Input, inject } from '@angular/core';
import { concatMap, forkJoin, map, tap } from 'rxjs';
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

  public versionGroupsWithPokedexes: Set<number> = new Set();

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.getAllPokedexVersionGroups();
  }

  getAllPokedexVersionGroups(): void {
    forkJoin({
      versionGroups: this.supabase.getAllVersionGroups(),
      generations: this.supabase.getAllGenerations(),
      pokedexVersionGroups: this.supabase.getAllPokedexVersionGroups(),
    }).subscribe(({ versionGroups, generations, pokedexVersionGroups }) => {
      const versionGroupIds = versionGroups.map((item: any) => item.id);
      const filteredPokedexVersionGroups = pokedexVersionGroups.filter(
        (pokedexVersionGroup: Tables<'pokedex_version_groups'>) =>
          versionGroupIds.includes(pokedexVersionGroup.version_group_id)
      );

      this.versionGroupsWithPokedexes = new Set(
        filteredPokedexVersionGroups.map((item) => item.version_group_id)
      );

      const newSections = generations.reverse().map((generation) => {
        return {
          name: generation.name ?? '',
          options: this.filterVersionGroupsByGenerationId(
            versionGroups,
            generation.id
          ).map((versionGroup) => ({
            name: versionGroup.name,
            path: `/pokedex/${versionGroup.identifier}`,
          })),
        };
      });

      this.sections.push(...newSections);
    });
  }

  filterVersionGroupsByGenerationId(
    versionGroups: Tables<'version_groups'>[] = [],
    generationId: number
  ): Tables<'version_groups'>[] {
    return versionGroups.filter(
      (versionGroup): boolean =>
        versionGroup.generation_id === generationId &&
        this.versionGroupsWithPokedexes.has(versionGroup.id)
    );
  }
}
