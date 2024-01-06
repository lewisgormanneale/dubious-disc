import { Component, inject, Input } from '@angular/core';
import { Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon-descriptions',
  templateUrl: './pokemon-descriptions.component.html',
})
export class PokemonDescriptionsComponent {
  @Input() pokemon_species_id: number = 0;
  showMore = false;

  descriptions: Tables<'pokemon_species_flavor_text'>[] = [];

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.supabase
      .getPokemonSpeciesFlavorTextById(this.pokemon_species_id)
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
