import { APIPreview } from './pokeapi.model';

export interface VersionGroup {
  generation: APIPreview;
  id: number;
  move_learn_methods: APIPreview[];
  name: string;
  order: number;
  pokedexes: APIPreview[];
  regions: APIPreview[];
  versions: APIPreview[];
}
