"use client";

import React, { useContext, useEffect, useState } from "react";
import TeamPlannerLogo from "@/components/TeamPlanner/TeamPlannerLogo";
import TeamMembers from "@/components/TeamPlanner/TeamMembers";
import TeamPlannerDex from "@/components/TeamPlanner/TeamPlannerDex";
import { useTeamPlannerData } from "@/hooks/useTeamPlannerData";
import Filters from "@/components/TeamPlanner/Filters/Filters";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import { VersionData } from "@/types/types";

export default function TeamPlannerPage({
  params,
}: {
  params: { slug: string };
}) {
  const [teamPlannerDex, setTeamPlannerDex] = useState<any>([]);
  const [initialTeamPlannerDex, setInitialTeamPlannerDex] = useState<any>([]);
  const [version, setVersion] = useState<any>({});
  const [teamMembers, setTeamMembers] = useState<any>([]);
  useEffect(() => {
    async function FetchData() {
      const { teamPlannerDexData, versionData }: any = await useTeamPlannerData(
        params.slug
      );
      setTeamPlannerDex(teamPlannerDexData);
      setInitialTeamPlannerDex(teamPlannerDexData);
      setVersion(versionData);
    }
    FetchData();
  }, [params.slug]);
  return (
    <TeamPlannerContext.Provider
      value={{
        teamPlannerDex: teamPlannerDex,
        initialTeamPlannerDex: initialTeamPlannerDex,
        setTeamPlannerDex: setTeamPlannerDex,
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
          <div className="flex flex-col w-full sticky top-14 lg:top-0 min-w-[355px] bg-zinc-900 z-10">
            <TeamMembers />
            <Filters />
          </div>
          <TeamPlannerDex />
        </div>
      </>
    );
  }
}
