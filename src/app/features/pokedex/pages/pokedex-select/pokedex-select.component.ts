import { Component, inject, OnInit } from '@angular/core';
import { concatMap, map, tap } from 'rxjs';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokedex-select',
  templateUrl: './pokedex-select.component.html',
})
export class PokedexSelectComponent implements OnInit {
  public versionGroups: any[] = [];
  public versionGroupIds: number[] = [];
  public generations: any[] = [];
  public versionGroupsWithPokedexes: any[] = [];
  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.supabase
      .getAllVersionGroups()
      .pipe(
        tap((versionGroups) => {
          this.versionGroups = versionGroups;
          this.versionGroupIds = versionGroups.map((item: any) => item.id);
        }),
        concatMap(() => this.supabase.getAllGenerations()),
        tap((generations) => {
          this.generations = generations;
        }),
        concatMap(() => this.supabase.getAllPokedexVersionGroups()),
        map((pokedexVersionGroups) =>
          pokedexVersionGroups
            .filter((item: any) =>
              this.versionGroupIds.includes(item.version_group_id)
            )
            .map((item: any) => item.version_group_id)
        )
      )
      .subscribe((versionGroupsWithPokedexes) => {
        this.versionGroupsWithPokedexes = versionGroupsWithPokedexes;
      });
  }

  getVersionGroupsByGenerationId(id: number): any[] {
    return this.versionGroups.filter(
      (versionGroup) =>
        versionGroup.generation_id === id &&
        this.versionGroupsWithPokedexes.includes(versionGroup.id)
    );
  }
}
