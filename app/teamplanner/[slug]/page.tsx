"use client";

import React, { useContext, useEffect, useState } from "react";
import TeamPlannerLogo from "@/components/TeamPlanner/TeamPlannerLogo";
import TeamMembers from "@/components/TeamPlanner/TeamMembers";
import TeamPlannerDex from "@/components/TeamPlanner/TeamPlannerDex";
import { useTeamPlannerData } from "@/hooks/useTeamPlannerData";
import Filters from "@/components/TeamPlanner/Filters";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";

export default function TeamPlannerPage({
  params,
}: {
  params: { slug: string };
}) {
  const [teamPlannerDex, setTeamPlannerDex] = useState<any>([]);
  const [version, setVersion] = useState<any>({});
  const [teamMembers, setTeamMembers] = useState<any>([]);
  useEffect(() => {
    async function FetchData() {
      const { teamPlannerDexData, versionData }: any = await useTeamPlannerData(
        params.slug
      );
      setTeamPlannerDex(teamPlannerDexData);
      setVersion(versionData);
    }
    FetchData();
  }, [params.slug]);
  return (
    <TeamPlannerContext.Provider
      value={{
        teamPlannerDex: teamPlannerDex,
        version: version,
        teamMembers: teamMembers,
        setTeamMembers: setTeamMembers,
      }}
    >
      <TeamPlannerPageContents />
    </TeamPlannerContext.Provider>
  );
}

function TeamPlannerPageContents() {
  const { teamPlannerDex, version }: any = useContext(TeamPlannerContext);
  if (!teamPlannerDex || !version) {
    return <></>;
  } else {
    return (
      <>
        <div className="flex flex-col justify-center items-center rounded">
          <TeamPlannerLogo />
          <div className="flex flex-col w-full sticky top-14 lg:top-0 bg-zinc-900">
            <TeamMembers />
            <Filters />
          </div>
          <TeamPlannerDex />
        </div>
      </>
    );
  }
}
