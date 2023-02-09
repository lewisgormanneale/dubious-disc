import { supabase } from "@/supabase";

function isPokedexVersionGroup(obj: any): obj is { pokedex_id: number | null } {
  return obj.hasOwnProperty("pokedex_id");
}

export async function useTeamPlannerData(slug: string) {
  const { data: versionGroupData, error: versionGroupError } = await supabase
    .from("version_groups")
    .select("id, name, pokedex_version_groups(pokedex_id)")
    .eq("identifier", slug);
  if (versionGroupError) {
    console.log(versionGroupError);
  } else if (!versionGroupData || versionGroupData.length === 0) {
    console.error("No data found for the given slug");
    return;
  } else if (
    Array.isArray(versionGroupData[0].pokedex_version_groups) &&
    versionGroupData[0].pokedex_version_groups.length > 0 &&
    isPokedexVersionGroup(versionGroupData[0].pokedex_version_groups[0])
  ) {
    const pokedexId = versionGroupData[0].pokedex_version_groups[0].pokedex_id;
    const { data: pokemonDexData, error: pokemonDexError } = await supabase
      .from("pokemon_dex_numbers")
      .select("species_id, pokedex_number, pokemon_species(*)")
      .eq("pokedex_id", pokedexId);
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
      return [sortedPokemonDexData, versionGroupData[0]];
    }
  }
}
