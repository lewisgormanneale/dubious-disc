import FAQ from "@/components/TeamPlanner/FAQ";
import TeamPlannerDexEntry from "@/components/TeamPlanner/TeamPlannerDexEntry";
import { useTeamPlannerData } from "@/hooks/useTeamPlannerData";

export default async function Page({ params }: { params: { slug: string } }) {
  const { teamPlannerDex, version }: any = await useTeamPlannerData(
    params.slug
  );

  return (
    <main className="flex flex-col justify-center items-center rounded">
      {version ? (
        <h1 className="text-white text-xl font-bold mt-5">
          Pokémon {version.name} Team Planner
        </h1>
      ) : (
        <></>
      )}
      <div className="mb-8">
        {/* <p className="text-white">Team data goes here</p> */}
      </div>
      <div className="flex flex-wrap flex-shrink gap-3 justify-center">
        {teamPlannerDex && Array.isArray(teamPlannerDex) && version ? (
          teamPlannerDex.map((pokemon: any) => (
            <TeamPlannerDexEntry
              key={pokemon.id}
              pokemon={pokemon}
              version={version}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <FAQ />
    </main>
  );
}
