import { Component, inject } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  pokemonSpecies: {
    species_id: any;
    pokedex_number: number;
  }[] = [];
  randomPokemonIdentifier: string = '';

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.supabase.getPokemonSpeciesByPokedexId(31).subscribe((data: any) => {
      this.pokemonSpecies = data;
      this.randomPokemonIdentifier = this.getRandomPokemonIdentifier();
    });
  }

  getRandomPokemonIdentifier() {
    return this.pokemonSpecies[
      Math.floor(Math.random() * this.pokemonSpecies.length)
    ].species_id.identifier;
  }
}
