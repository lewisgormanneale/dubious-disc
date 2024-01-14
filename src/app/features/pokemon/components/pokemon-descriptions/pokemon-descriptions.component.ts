import { Component, inject, Input, OnChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon-descriptions',
  templateUrl: './pokemon-descriptions.component.html',
})
export class PokemonDescriptionsComponent implements OnChanges {
  @Input() pokemon_species_id: number = 0;
  @Input() versions: Tables<'versions'>[] = [];
  showMore = false;

  descriptions: Tables<'pokemon_species_flavor_text'>[] = [];

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges(): void {
    const versionIds = this.versions.map((version) => version.id);

    this.supabase
      .getPokemonSpeciesFlavorTextWithVersionIdBySpeciesId(
        this.pokemon_species_id,
        versionIds
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((descriptions) => {
        this.descriptions = descriptions;
      });
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  getVersionName(versionId: number): string {
    const version = this.versions.find((version) => version.id === versionId);
    return version ? version.name : '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
