import { Type } from './types.model';

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}

export interface PokemonSpecies {
  name: string;
  url: string;
  id?: string;
  description?: string;
  details?: PokemonDetails;
  species_details?: PokemonSpeciesDetails;
}

export interface PokemonDetails {
  abilities?: Array<any>;
  base_experience?: number;
  forms?: Array<any>;
  game_indices?: Array<any>;
  height?: number;
  held_items?: Array<any>;
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Array<any>;
  name?: string;
  order?: number;
  species?: any;
  sprites?: PokemonSprites;
  stats?: PokemonStat[];
  types?: Type[];
  weight?: number;
}

export interface PokemonSpeciesDetails {
  base_happiness?: number;
  capture_rate?: number;
  color?: any;
  egg_groups?: Array<any>;
  evolution_chain?: any;
  evolves_from_species?: any;
  flavor_text_entries?: PokemonFlavorText[];
  form_descriptions?: Array<any>;
  forms_switchable?: boolean;
  gender_rate?: number;
  genera?: Array<any>;
  generation?: any;
  growth_rate?: any;
  habitat?: any;
  has_gender_differences?: boolean;
  hatch_counter?: number;
  id?: number;
  is_baby?: boolean;
  is_legendary?: boolean;
  is_mythical?: boolean;
  name?: string;
  names?: Array<any>;
  order?: number;
  pal_park_encounters?: Array<any>;
  pokedex_numbers?: Array<any>;
  shape?: any;
  varieties?: Array<any>;
}

export interface PokemonSprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  other?: {
    dream_world?: {
      front_default?: string;
      front_female?: string;
    };
    home?: {
      front_default?: string;
      front_female?: string;
      front_shiny?: string;
      front_shiny_female?: string;
    };
    'official-artwork'?: {
      front_default?: string;
      front_shiny?: string;
    };
  };
}

export interface PokemonName {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  formatted_name?: string;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonFlavorText {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}
