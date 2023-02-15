import React from "react";
import TeamPlannerLogo from "@/components/TeamPlanner/TeamPlannerLogo";
import TeamMembers from "@/components/TeamPlanner/TeamMembers";
import TeamPlannerDex from "@/components/TeamPlanner/TeamPlannerDex";
import { useTeamPlannerData } from "@/hooks/useTeamPlannerData";
import Filters from "@/components/TeamPlanner/Filters";

export default async function Page({ params }: { params: { slug: string } }) {
  const { teamPlannerDex, version }: any = await useTeamPlannerData(
    params.slug
  );

  return (
    <main className="flex flex-col justify-center items-center rounded">
      <TeamPlannerLogo version={version} />
      <div className="flex flex-col w-full sticky top-14 lg:top-0 bg-zinc-900">
        <TeamMembers />
        <Filters />
      </div>
      <TeamPlannerDex teamPlannerDex={teamPlannerDex} version={version} />
    </main>
  );
}
