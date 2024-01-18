import { Component, inject, Input, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokedex-grid-view-item',
  templateUrl: './pokedex-grid-view-item.component.html',
})
export class PokedexGridViewItemComponent implements OnInit {
  @Input() pokemon: any = {} as any;
  imageURL: string = '';

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.imageURL = this.supabase.storage
      .from('pokemon')
      .getPublicUrl(
        'home-icons/' + this.pokemon.species_id.id + '.png'
      ).data.publicUrl;
  }
}
