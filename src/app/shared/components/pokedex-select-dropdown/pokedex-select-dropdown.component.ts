import { Component, Input, OnChanges, inject } from '@angular/core';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { DropdownSection, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokedex-select-dropdown',
  templateUrl: './pokedex-select-dropdown.component.html',
})
export class PokedexSelectDropdownComponent implements OnChanges {
  @Input() selectedPokemonSpecies?: Tables<'pokemon_species'>;
  @Input() currentVersionGroupName: string = '';

  public sections: DropdownSection[] = [];
  public placeholder: string = 'Select Pokedex';

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges(): void {
    if (this.selectedPokemonSpecies) {
      this.getPokedexVersionGroupsWithPokemon();
    } else {
      this.getAllPokedexVersionGroups();
    }
  }

  getAllPokedexVersionGroups(): void {
    forkJoin({
      versionGroups: this.supabase.getAllVersionGroups(),
      generations: this.supabase.getAllGenerations(),
      pokedexVersionGroups: this.supabase.getAllPokedexVersionGroups(),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ versionGroups, generations, pokedexVersionGroups }) => {
        const versionGroupIds = versionGroups.map((item: any) => item.id);
        let filteredPokedexVersionGroups = pokedexVersionGroups.filter(
          (pokedexVersionGroup: Tables<'pokedex_version_groups'>) =>
            versionGroupIds.includes(pokedexVersionGroup.version_group_id)
        );
        const versionGroupsWithPokedexes = new Set(
          filteredPokedexVersionGroups.map((item) => item.version_group_id)
        );

        this.sections = [
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

  getPokedexVersionGroupsWithPokemon(): void {
    if (!this.selectedPokemonSpecies) return;
    forkJoin({
      versionGroups: this.supabase.getAllVersionGroups(),
      generations: this.supabase.getAllGenerations(),
      pokedexVersionGroups: this.supabase.getAllPokedexVersionGroups(),
      pokemonDexNumbers: this.supabase.getPokemonDexNumbersBySpeciesId(
        this.selectedPokemonSpecies.id
      ),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ({
          versionGroups,
          generations,
          pokedexVersionGroups,
          pokemonDexNumbers,
        }) => {
          const versionGroupIds = versionGroups.map((item: any) => item.id);
          let filteredPokedexVersionGroups = pokedexVersionGroups.filter(
            (pokedexVersionGroup: Tables<'pokedex_version_groups'>) =>
              versionGroupIds.includes(pokedexVersionGroup.version_group_id)
          );
          const dexNumbers = pokemonDexNumbers.map((item) => item.pokedex_id);
          filteredPokedexVersionGroups = filteredPokedexVersionGroups.filter(
            (pokedexVersionGroup: Tables<'pokedex_version_groups'>) =>
              dexNumbers.includes(pokedexVersionGroup.pokedex_id)
          );
          const versionGroupsWithPokedexes = new Set(
            filteredPokedexVersionGroups.map((item) => item.version_group_id)
          );

          this.sections = [
            ...generations
              .reverse()
              .reduce((acc: DropdownSection[], generation) => {
                const matchingVersionGroups = versionGroups.filter(
                  (versionGroup): boolean =>
                    versionGroup.generation_id === generation.id &&
                    versionGroupsWithPokedexes.has(versionGroup.id)
                );

                if (matchingVersionGroups.length > 0) {
                  acc.push({
                    name: generation.name ?? '',
                    options: matchingVersionGroups.map((versionGroup) => ({
                      name: versionGroup.name,
                      path: `/pokedex/${versionGroup.identifier}/${this.selectedPokemonSpecies?.identifier}`,
                    })),
                  });
                }

                return acc;
              }, []),
          ];
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
