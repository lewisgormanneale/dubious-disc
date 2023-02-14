import { supabase } from "@/supabase";

async function usePokemonDexData(pokedexID: number) {
  const { data: pokemonDexData, error: pokemonDexError } = await supabase
    .from("pokemon_dex_numbers")
    .select(
      "pokemon_id, species_id, pokedex_number, pokemon(*), pokemon_species(*)"
    )
    .eq("pokedex_id", pokedexID);
  if (pokemonDexError) {
    console.log(pokemonDexError);
  } else {
    const sortedPokemonDexData = pokemonDexData.sort((a, b) => {
      if (a.pokedex_number && b.pokedex_number) {
        return a.pokedex_number - b.pokedex_number;
      } else {
        return 1;
      }
    });
    return sortedPokemonDexData;
  }
}

export default usePokemonDexData;
