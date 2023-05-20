import useVersionGroupData from "./useVersionGroupData";
import usePokemonDexData from "./usePokemonDexData";

export async function useTeamPlannerData(slug: string) {
  const versionData: any = await useVersionGroupData(slug);
  const pokedexID: number = versionData.pokedex_version_groups[0].pokedex_id;
  const teamPlannerDexData = await usePokemonDexData(pokedexID);
  return { teamPlannerDexData, versionData };
}
