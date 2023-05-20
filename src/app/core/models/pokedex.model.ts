import { PokemonEntry } from './pokemon.model';

export interface Pokedex {
  descriptions: Array<any>;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Array<any>;
  pokemon_entries: PokemonEntry[];
  region: any;
  version_groups: Array<any>;
}
