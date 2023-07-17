import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Pokedex, PokemonDetails, PokemonName } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private pokedexUrl: string = environment.apiUrl + 'pokedex/';
  private pokemonUrl: string = environment.apiUrl + 'pokemon/';
  private speciesUrl: string = environment.apiUrl + 'pokemon-species/';

  constructor(private http: HttpClient) {}

  getPokedex(pokedex_number: number): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.pokedexUrl}${pokedex_number}`);
  }

  getPokedexEntries(pokedex_number: number, page: number): Observable<Pokedex> {
    return this.http.get<Pokedex>(
      `${this.pokedexUrl}${pokedex_number}?page=${page}&limit=50`
    );
  }

  getPokemonDetails(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.pokemonUrl}${id}`);
  }

  getPokemonSpeciesDetails(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.speciesUrl}${id}`);
  }

  getPokemonNameByLanguage(names: PokemonName[], language: string) {
    const name = names.find(
      (name: PokemonName) => name.language.name === language
    )?.name!;
    return name ? name : '';
  }
}
