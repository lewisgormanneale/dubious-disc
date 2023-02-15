import React from "react";
import TeamPlannerDexEntry from "./TeamPlannerDexEntry";

export default function TeamPlannerDex({ teamPlannerDex, version }: any) {
  return (
    <div className="flex flex-wrap flex-shrink gap-3 p-4 justify-center">
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
  );
}
