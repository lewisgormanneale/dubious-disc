import { Component, Input, OnChanges, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokedex-view',
  templateUrl: './pokedex-view.component.html',
})
export class PokedexViewComponent implements OnChanges {
  @Input() pokedex: Tables<'pokedexes'> = {} as Tables<'pokedexes'>;
  @Input() versionGroupIdentifier: string = '';
  @Input() listView: boolean = false;
  pokemonEntries: any = [];

  private supabase: SupabaseService = inject(SupabaseService);
  private router: Router = inject(Router);

  ngOnChanges() {
    this.supabase
      .getPokemonSpeciesByPokedexId(this.pokedex.id)
      .subscribe((data: any) => {
        this.pokemonEntries = data;
      });
  }

  onPokemonClick(pokemon: any) {
    let pokemonSpeciesIdentifier = pokemon.species_id.identifier;
    this.router.navigate([
      'pokedex',
      this.versionGroupIdentifier,
      pokemonSpeciesIdentifier,
    ]);
  }
}
