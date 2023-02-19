export interface PokemonData {
  pokemon_id: number;
  species_id: number;
  pokedex_number: number;
  pokemon: {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number | null;
    order: number | null;
    is_default: boolean;
    name: string | null;
    type_id_slot_1: number;
    type_id_slot_2: number;
  };
  pokemon_species: {
    id: number;
    identifier: string;
    generation_id: number;
    evolves_from_species_id: number | null;
    evolution_chain_id: number;
    color_id: number;
    shape_id: number;
    habitat_id: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: "0" | "1";
    hatch_counter: number;
    has_gender_differences: boolean;
    growth_rate_id: number;
    forms_switchable: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    order: number;
    name: string;
    genus: string;
    form_description: string | null;
  };
  gender:
    | "male"
    | "female"
    | "always-male"
    | "always-female"
    | "gender-unknown";
  uuid: string;
  sprite: string;
}

export interface VersionData {
  id: number;
  name: string;
  identifier: string;
  generation_id: number;
  pokedex_version_groups: {
    pokedex_id: number;
  }[];
}

export {};
