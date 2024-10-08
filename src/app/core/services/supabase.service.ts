import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Database, Tables } from '../models/supabase.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient<Database>(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  get storage() {
    return this.supabase.storage;
  }

  // Generations

  getAllGenerations(): Observable<Tables<'generations'>[]> {
    const request = this.supabase.from('generations').select('*');
    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokedexes

  getAllPokedexes(): Observable<Tables<'pokedexes'>[]> {
    const request = this.supabase.from('pokedexes').select('*');
    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokedex Version Groups

  getAllPokedexVersionGroups(): Observable<Tables<'pokedex_version_groups'>[]> {
    const request = this.supabase.from('pokedex_version_groups').select('*');
    return from(request).pipe(map((response) => response.data || []));
  }

  getPokedexesByVersionGroupId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokedex_version_groups')
      .select('pokedex_id (*)')
      .eq('version_group_id', id);
    return from(request).pipe(
      map((response) => response.data?.map((item) => item.pokedex_id) || [])
    );
  }

  // Pokémon

  getPokemonBySpeciesId(id: number): Observable<Tables<'pokemon'>[]> {
    const request = this.supabase
      .from('pokemon')
      .select('*')
      .eq('species_id', id)
      .order('form_order', { ascending: true });

    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokémon Abilities

  getPokemonAbilitiesByPokemonId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokemon_abilities')
      .select(
        'pokemon_id, ability_id (id, identifier, name, generation_id, short_effect), is_hidden, slot'
      )
      .eq('pokemon_id', id)
      .order('slot', { ascending: true });

    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokémon Dex Numbers

  getPokemonDexNumbersBySpeciesId(
    id: number
  ): Observable<Tables<'pokemon_dex_numbers'>[]> {
    const request = this.supabase
      .from('pokemon_dex_numbers')
      .select('*')
      .eq('species_id', id)
      .order('pokedex_id', { ascending: true });

    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokemon Moves

  getPokemonMovesByPokemonId(
    id: number,
    versionGroupId: number
  ): Observable<any> {
    const request = this.supabase
      .from('pokemon_moves')
      .select(
        'pokemon_id, version_group_id, level, order, move_id (id, identifier, name, type_id ( id, identifier, name, type_color ), power, pp, accuracy), pokemon_move_method_id (id, identifier, name)'
      )
      .eq('pokemon_id', id)
      .eq('version_group_id', versionGroupId)
      .order('order', { ascending: true });

    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokemon Species

  getPokemonSpeciesByIdentifier(
    identifier: string
  ): Observable<Tables<'pokemon_species'>> {
    const request = this.supabase
      .from('pokemon_species')
      .select('*')
      .eq('identifier', identifier)
      .single();

    return from(request).pipe(map((response) => response.data || []));
  }

  getPokemonSpeciesByPokedexId(id: number): Observable<
    {
      species_id: any;
      pokedex_number: number;
    }[]
  > {
    const request = this.supabase
      .from('pokemon_dex_numbers')
      .select('species_id (id, identifier, name, genus), pokedex_number')
      .eq('pokedex_id', id)
      .order('pokedex_number', { ascending: true });

    return from(request).pipe(map((response) => response.data || []));
  }

  getAllPokemonSpeciesIdentifiers(): Observable<any> {
    const request = this.supabase.from('pokemon_species').select('identifier');
    return from(request).pipe(
      map((response) => response.data || []),
      map((data) => data.map((item: any) => item.identifier))
    );
  }

  // Pokemon Species Flavor Text

  getPokemonSpeciesFlavorTextBySpeciesId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokemon_species_flavor_text')
      .select('*')
      .eq('species_id', id);

    return from(request).pipe(map((response) => response.data || []));
  }

  getPokemonSpeciesFlavorTextWithVersionIdBySpeciesId(
    speciesId: number,
    versionIds: number[]
  ): Observable<any> {
    const request = this.supabase
      .from('pokemon_species_flavor_text')
      .select('*')
      .eq('species_id', speciesId)
      .in('version_id', versionIds);

    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokemon Stats

  getPokemonStatsByPokemonId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokemon_stats')
      .select('stat_id (id, identifier, name), base_stat, effort')
      .eq('pokemon_id', id);

    return from(request).pipe(map((response) => response.data || []));
  }

  // Pokemon Types

  getPokemonTypesByPokemonId(id: number): Observable<any> {
    const request = this.supabase
      .from('pokemon_types')
      .select('type_id (id, identifier, name, type_color), slot')
      .eq('pokemon_id', id);

    return from(request).pipe(map((response) => response.data || []));
  }

  // Types

  getTypeById(id: number): Observable<any> {
    const request = this.supabase.from('types').select('*').eq('id', id);

    return from(request).pipe(map((response) => response.data || []));
  }

  // Versions

  getVersionsByVersionGroupId(id: number): Observable<Tables<'versions'>[]> {
    const request = this.supabase
      .from('versions')
      .select('*')
      .eq('version_group_id', id);
    return from(request).pipe(map((response) => response.data || []));
  }

  // Version Groups

  getAllVersionGroups(): Observable<Tables<'version_groups'>[]> {
    const request = this.supabase
      .from('version_groups')
      .select('*')
      .order('order', { ascending: true });
    return from(request).pipe(map((response) => response.data || []));
  }

  getVersionGroupByIdentifier(
    identifier: string
  ): Observable<Tables<'version_groups'>> {
    const request = this.supabase
      .from('version_groups')
      .select('*')
      .eq('identifier', identifier)
      .single();

    return from(request).pipe(map((response) => response.data || []));
  }
}
