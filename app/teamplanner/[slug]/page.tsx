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
      <TeamMembers />
      <Filters />
      <TeamPlannerDex teamPlannerDex={teamPlannerDex} version={version} />
    </main>
  );
}
