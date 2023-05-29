import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Database } from '../models/supabase.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient<Database>(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // getPokedex(pokedex_number: number) {
  //   return this.supabase.from('pokedex').select('*').eq('id', pokedex_number);
  // }

  async getPokedex(pokedexID: number) {
    const { data, error } = await this.supabase
      .from('pokemon_dex_numbers')
      .select(
        'pokemon_id, species_id, pokedex_number, pokemon(*), pokemon_species(*)'
      )
      .eq('pokedex_id', pokedexID);
    if (error) {
      return console.log(error);
    } else {
      const sortedPokemonDexData = data.sort((a, b) => {
        if (a.pokedex_number && b.pokedex_number) {
          return a.pokedex_number - b.pokedex_number;
        } else {
          return 1;
        }
      });
      return sortedPokemonDexData;
    }
  }

  getPokemon(pokemon_id: number) {
    return this.supabase.from('pokemon').select('*').eq('id', pokemon_id);
  }

  // getPokemonDetails(id: string) {
  //   return this.supabase.from('pokemon').select('*').eq('id', id);
  // }

  // getPokemonSpeciesDetails(id: string) {
  //   return this.supabase.from('pokemon_species').select('*').eq('id', id);
  // }
}
