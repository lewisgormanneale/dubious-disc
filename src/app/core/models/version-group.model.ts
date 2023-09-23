import { NamedAPIResource } from './pokeapi.model';

export interface VersionGroup {
  generation: NamedAPIResource;
  id: number;
  move_learn_methods: NamedAPIResource[];
  name: string;
  order: number;
  pokedexes: NamedAPIResource[];
  regions: NamedAPIResource[];
  versions: NamedAPIResource[];
}

export interface LocalVersionGroup {
  generation: NamedAPIResource;
  id: number;
  move_learn_methods: NamedAPIResource[];
  name: string;
  order: number;
  pokedexes: NamedAPIResource[];
  regions: NamedAPIResource[];
  versions: NamedAPIResource[];
}
