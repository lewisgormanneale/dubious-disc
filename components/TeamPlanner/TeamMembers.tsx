import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import TeamPlannerDexEntry from "./TeamPlannerDexEntry";

export default function TeamMembers() {
  const { teamMembers, setTeamMembers }: any = useContext(TeamPlannerContext);
  return (
    <div className="flex flex-wrap flex-shrink gap-3 justify-center items-center w-full h-52 border-y z-10 border-zinc-700 text-white">
      {teamMembers && Array.isArray(teamMembers) ? (
        teamMembers.map((pokemon: any) => (
          <TeamPlannerDexEntry key={uuidv4()} pokemon={pokemon} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
