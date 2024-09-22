import { Component, inject, Input, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokemon-summary',
  templateUrl: './pokemon-summary.component.html',
})
export class PokemonSummaryComponent implements OnChanges {
  @Input() selectedForm: Tables<'pokemon'> = {} as Tables<'pokemon'>;
  @Input() pokemonSpecies: Tables<'pokemon_species'> =
    {} as Tables<'pokemon_species'>;
  pokemonTypes: any;
  imageUrl: string = '';
  shiny: boolean = false;
  female: boolean = false;
  imageLoaded: boolean = false;

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges(): void {
    if (!this.selectedForm.id) return;
    this.imageLoaded = false;
    this.supabase
      .getPokemonTypesByPokemonId(this.selectedForm.id)
      .subscribe((data) => {
        this.pokemonTypes = data;
      });
    this.getImageUrl();
  }

  getImageUrl() {
    let url = 'home-previews/';

    this.shiny ? (url += 'shiny/') : null;
    this.female ? (url += 'female/') : null;
    url += this.selectedForm.id + '.png';

    this.imageUrl = this.supabase.storage
      .from('pokemon')
      .getPublicUrl(url).data.publicUrl;
    this.loadImage();
  }

  loadImage() {
    const img = new Image();
    img.src = this.imageUrl;
    img.onload = () => {
      this.imageLoaded = true;
    };
    img.onerror = () => {
      this.imageLoaded = true;
      this.imageUrl = 'assets/images/question-icon.png';
    };
  }

  getTypeBackgroundColor(opacity: number = 0.3): string {
    const hexToRgba = (hex: string, alpha: number = 1) => {
      hex = hex.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    if (this.pokemonTypes && this.pokemonTypes.length > 1) {
      const color1 = hexToRgba(
        this.pokemonTypes[0].type_id.type_color,
        opacity
      );
      const color2 = hexToRgba(
        this.pokemonTypes[1].type_id.type_color,
        opacity
      );
      return `linear-gradient(to bottom right, ${color1}, ${color2})`;
    } else if (this.pokemonTypes && this.pokemonTypes.length == 1) {
      return hexToRgba(this.pokemonTypes[0].type_id.type_color, opacity);
    } else {
      return `rgba(39, 39, 42, ${opacity})`;
    }
  }

  shinyToggle() {
    this.shiny = !this.shiny;
    this.getImageUrl();
  }

  genderToggle() {
    this.female = !this.female;
    this.getImageUrl();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
