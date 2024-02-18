import { Component, Input, OnChanges, inject } from '@angular/core';
import { Subject, pipe, takeUntil } from 'rxjs';
import { Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokemon-data',
  templateUrl: './pokemon-data.component.html',
})
export class PokemonDataComponent implements OnChanges {
  @Input() pokemon?: any;
  @Input() pokemon_species?: any;

  pokemonAbilities: any = [];

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges(): void {
    if (!this.pokemon.id) return;
    this.supabase
      .getPokemonAbilitiesByPokemonId(this.pokemon.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.pokemonAbilities = data;
      });
  }
}
