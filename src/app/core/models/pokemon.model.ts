import { NamedAPIResource, Pokemon, PokemonSpecies } from './pokeapi';

/**
 * Pokémon retrieved from the PokéAPI.
 */
export interface CombinedPokemonEntry {
  name: '';
  url: '';
  entry_number: number;
  id: '';
  pokemon_details: Pokemon;
  pokemon_species: NamedAPIResource;
  pokemon_species_details: PokemonSpecies;
}
