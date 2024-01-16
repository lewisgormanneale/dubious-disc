import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { takeUntil, tap, switchMap, forkJoin, map, Subject } from 'rxjs';
import { DropdownLinkSection, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon-summary',
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

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges(): void {
    if (!this.selectedForm.id) return;
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
