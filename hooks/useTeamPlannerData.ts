import useVersionGroupData from "./useVersionGroupData";
import usePokemonDexData from "./usePokemonDexData";

export async function useTeamPlannerData(slug: string) {
  const version: any = await useVersionGroupData(slug);
  const pokedexID: number = version.pokedex_version_groups[0].pokedex_id;
  const teamPlannerDex = await usePokemonDexData(pokedexID);
  return { teamPlannerDex, version };
}
