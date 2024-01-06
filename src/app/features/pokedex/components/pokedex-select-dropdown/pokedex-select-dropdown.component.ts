import { Component, Input, inject } from '@angular/core';
import { concatMap, forkJoin, map, tap } from 'rxjs';
import { DropdownLinkSection, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokedex-select-dropdown',
  templateUrl: './pokedex-select-dropdown.component.html',
})
export class PokedexSelectDropdownComponent {
  @Input() selectedPokemonSpecies?: Tables<'pokemon_species'>;
  @Input() currentVersionGroupName: string = '';
  @Input() origin: string = 'left';

  public sections: DropdownLinkSection[] = [];

  public placeholder: string = 'Select Pokedex';

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
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
    }).subscribe(({ versionGroups, generations, pokedexVersionGroups }) => {
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
    }).subscribe(
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
            .reduce((acc: DropdownLinkSection[], generation) => {
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
}