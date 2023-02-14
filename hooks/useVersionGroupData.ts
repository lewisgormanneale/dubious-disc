import { supabase } from "@/supabase";

function isPokedexVersionGroup(obj: any): obj is { pokedex_id: number | null } {
  return obj.hasOwnProperty("pokedex_id");
}

async function useVersionGroupData(slug: string) {
  const { data: versionGroupData, error: versionGroupError } = await supabase
    .from("version_groups")
    .select(
      "id, name, identifier, generation_id, pokedex_version_groups(pokedex_id)"
    )
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
    return versionGroupData[0];
  }
}

export default useVersionGroupData;
