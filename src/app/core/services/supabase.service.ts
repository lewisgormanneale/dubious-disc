import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { from, map, Observable } from 'rxjs';
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

  getAllVersionGroups(): Observable<any> {
    const request = this.supabase
      .from('version_groups')
      .select('*')
      .order('order', { ascending: true });
    return from(request).pipe(map((response) => response.data || []));
  }

  getVersionGroupByIdentifier(identifier: string): Observable<any> {
    const request = this.supabase
      .from('version_groups')
      .select('*')
      .eq('identifier', identifier)
      .single();

    return from(request).pipe(map((response) => response.data || []));
  }

  getAllGenerations(): Observable<any> {
    const request = this.supabase.from('generations').select('*');
    return from(request).pipe(map((response) => response.data || []));
  }

  getAllPokedexes(): Observable<any> {
    const request = this.supabase.from('pokedexes').select('*');
    return from(request).pipe(map((response) => response.data || []));
  }

  getAllPokedexVersionGroups(): Observable<any> {
    const request = this.supabase.from('pokedex_version_groups').select('*');
    return from(request).pipe(map((response) => response.data || []));
  }

  getPokedexesByVersionGroupId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokedex_version_groups')
      .select(
        'pokedex_id (id, identifier, name, description, region_id, is_main_series)'
      )
      .eq('version_group_id', id);

    return from(request).pipe(
      map((response) => response.data || []),
      map((data) => data.map((item) => item.pokedex_id))
    );
  }

  getPokemonByDexId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokemon_dex_numbers')
      .select('species_id (id, identifier, name), pokedex_number')
      .eq('pokedex_id', id)
      .order('pokedex_number', { ascending: true });

    return from(request).pipe(
      map((response) => response.data || []),
      map((data) => data.map((item) => item.species_id))
    );
  }
}
