import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  getAllVersionGroups(): Observable<any> {
    const request = this.supabase
      .from('version_groups')
      .select('*')
      .order('order', { ascending: true });
    return from(request).pipe(map((response) => response.data || []));
  }

  getAllGenerations(): Observable<any> {
    const request = this.supabase.from('generations').select('*');
    return from(request).pipe(map((response) => response.data || []));
  }

  getPokedexByIdentifier(identifier: string): Observable<any> {
    const request = this.supabase
      .from('pokedexes')
      .select('*')
      .eq('identifier', identifier)
      .single();

    return from(request).pipe(map((response) => response.data || []));
  }

  getPokedexesByVersionGroupId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokedex_version_groups')
      .select('pokedex_id (id, identifier), version_group_id')
      .eq('id', id)
      .single();

    return from(request).pipe(map((response) => response.data || []));
  }

  getPokemonByDexId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokemon_dex_numbers')
      .select('species_id (id, identifier), pokedex_number')
      .eq('pokedex_id', id)
      .order('pokedex_number', { ascending: true });

    return from(request).pipe(map((response) => response.data || []));
  }
}
