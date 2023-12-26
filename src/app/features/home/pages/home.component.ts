import { Component, inject } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  pokemonSpecies: string[] = [];
  randomPokemonIdentifier: string = '';

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.supabase.getAllPokemonSpeciesIdentifiers().subscribe((data: any) => {
      this.pokemonSpecies = data;
      this.randomPokemonIdentifier = this.getRandomPokemonIdentifier();
    });
  }

  getRandomPokemonIdentifier() {
    return this.pokemonSpecies[
      Math.floor(Math.random() * this.pokemonSpecies.length)
    ];
  }
}
