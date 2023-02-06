import { gql } from "graphql-request";

export const SAMPLE_QUERY = gql`
  {
    gen3_species: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { name: { _eq: "generation-iii" } } }
      order_by: { id: asc }
    ) {
      name
      id
    }
    generations: pokemon_v2_generation {
      name
      pokemon_species: pokemon_v2_pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const TALLEST = gql`
  {
    pokemon: pokemon_v2_pokemon(
      order_by: { height: desc }
      limit: 3
      where: { is_default: { _eq: true } }
    ) {
      name
      height
    }
  }
`;
