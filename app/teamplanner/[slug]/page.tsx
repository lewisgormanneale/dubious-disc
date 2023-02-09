import FAQ from "@/components/TeamPlanner/FAQ";
import TeamPlannerDexEntry from "@/components/TeamPlanner/TeamPlannerDexEntry";
import { useTeamPlannerData } from "@/hooks/useTeamPlannerData";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await useTeamPlannerData(params.slug);

  return (
    <main className="flex flex-col justify-center items-center">
      {data ? (
        <h1 className="text-white text-xl font-bold">
          Pokémon {(data as { name: string }[]).map((item) => item.name)} Team
          Planner
        </h1>
      ) : (
        <></>
      )}
      <div className="mb-5">
        {/* <p className="text-white">Team data goes here</p> */}
      </div>
      <div className="flex flex-wrap flex-shrink gap-2 justify-center">
        {data && Array.isArray(data[0]) ? (
          data[0].map((pokemon: any) => (
            <TeamPlannerDexEntry key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <></>
        )}
      </div>
      <FAQ />
    </main>
  );
}
