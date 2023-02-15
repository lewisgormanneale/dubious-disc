"use client";

import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import TeamPlannerDexEntry from "./TeamPlannerDexEntry";

export default function TeamPlannerDex() {
  const { teamPlannerDex, version }: any = useContext(TeamPlannerContext);
  return (
    <div className="flex flex-wrap flex-shrink gap-3 p-4 justify-center">
      {teamPlannerDex && Array.isArray(teamPlannerDex) && version ? (
        teamPlannerDex.map((pokemon: any) => (
          <TeamPlannerDexEntry
            key={uuidv4()}
            pokemon={pokemon}
            version={version}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
