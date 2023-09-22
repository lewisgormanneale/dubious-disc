import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import {
  APIPreview,
  APIResultsPreview,
  Pokedex,
  PokedexVersionGroup,
  PokemonDetails,
  PokemonName,
  VersionGroup,
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
      .get<APIResultsPreview>(`${this.versionGroupUrl}?limit=50`)
      .pipe(
        switchMap((response: APIResultsPreview) => {
          const versionGroups = response.results;
          const requests = versionGroups.map((group: APIPreview) =>
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

  getPokemonDetails(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.pokemonUrl}/${id}`);
  }

  getPokemonSpeciesDetails(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.speciesUrl}/${id}`);
  }

  getPokemonNameByLanguage(names: PokemonName[], language: string) {
    const name = names.find(
      (name: PokemonName) => name.language.name === language
    )?.name!;
    return name ? name : '';
  }
}
