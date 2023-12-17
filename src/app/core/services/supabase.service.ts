import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  PostgrestResponse,
  SupabaseClient,
} from '@supabase/supabase-js';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Profile {
  id?: string;
  username: string;
  website: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getPokedexById(): Observable<any> {
    const request = this.supabase
      .from('pokemon_dex_numbers')
      .select(
        'species_id (id, identifier), pokedex_id (id, identifier), pokedex_number'
      )
      .eq('pokedex_id', 3)
      .order('pokedex_number', { ascending: true });

    // Use 'from' to convert the Supabase promise into an observable
    return from(request).pipe(
      // Extract the 'data' property from the response
      map((response) => response.data || [])
    );
  }
}
