import { Component, inject, Input } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
})
export class DescriptionsComponent {
  @Input() pokemon_species_id: number = 0;

  descriptions: any[] = [];
  showMore = false;

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.supabase
      .getPokemonDescriptionsBySpeciesId(this.pokemon_species_id)
      .subscribe((data) => {
        data.forEach((element: any) => {
          if (!this.descriptions.includes(element.flavor_text)) {
            this.descriptions.push(element.flavor_text);
          }
        });
        this.descriptions.reverse();
      });
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
