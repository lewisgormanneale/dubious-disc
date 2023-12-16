import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import {
  NamedAPIResource,
  NamedAPIResourceList,
  Pokedex,
  VersionGroup,
  Name,
  PokemonSpecies,
  Pokemon,
} from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private pokedexUrl: string = environment.apiUrl + 'pokedex';
  private pokemonUrl: string = environment.apiUrl + 'pokemon';
  private speciesUrl: string = environment.apiUrl + 'pokemon-species';
  private versionGroupUrl: string = environment.apiUrl + 'version-group';

  constructor(private http: HttpClient) {}

  getPokedexById(pokedex_id: number): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.pokedexUrl}/${pokedex_id}`);
  }

  getPokedexByName(pokedex_name: string): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.pokedexUrl}/${pokedex_name}`);
  }

  getVersionGroupByName(version_group_name: string): Observable<VersionGroup> {
    return this.http.get<VersionGroup>(
      `${this.versionGroupUrl}/${version_group_name}`
    );
  }

  getAllVersionGroups(): Observable<VersionGroup[]> {
    return this.http
      .get<NamedAPIResourceList>(`${this.versionGroupUrl}?limit=50`)
      .pipe(
        switchMap((response: NamedAPIResourceList) => {
          const versionGroups = response.results;
          const requests = versionGroups.map((group: NamedAPIResource) =>
            this.getVersionGroupByName(group.name)
          );
          return forkJoin(requests);
        })
      );
  }

  getPokedexEntries(pokedex_number: number, page: number): Observable<Pokedex> {
    return this.http.get<Pokedex>(
      `${this.pokedexUrl}/${pokedex_number}?page=${page}&limit=50`
    );
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonUrl}/${id}`);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonUrl}/${name}`);
  }

  getPokemonSpeciesById(id: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${this.speciesUrl}/${id}`);
  }

  getPokemonSpeciesByName(name: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${this.speciesUrl}/${name}`);
  }

  getPokemonNameByLanguage(names: Name[], language: string) {
    const name = names.find((name: Name) => name.language.name === language)
      ?.name!;
    return name ? name : '';
  }
}
