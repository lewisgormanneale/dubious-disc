import { Component, inject, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokedex-select',
  templateUrl: './pokedex-select.component.html',
})
export class PokedexSelectComponent implements OnInit {
  public versionGroups: any[] = [];
  public generations: any[] = [];
  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.supabase.getAllVersionGroups().subscribe((versionGroups) => {
      this.versionGroups = versionGroups;
    });
    this.supabase.getAllGenerations().subscribe((generations) => {
      this.generations = generations;
    });
  }

  getVersionGroupsByGenerationId(id: number): any[] {
    return this.versionGroups.filter(
      (versionGroup) => versionGroup.generation_id === id
    );
  }
}
