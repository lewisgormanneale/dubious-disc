import TeamPlannerContext from "@/app/(user)/teamplanner/[slug]/TeamPlannerContext";
import React, { useContext } from "react";

export default function TeamPlannerLogo() {
  const { version }: any = useContext(TeamPlannerContext);
  return (
    <h1 className="text-green-400 text-2xl text-center font-bold my-5 px-4">
      Pokémon {version.name} Team Planner
    </h1>
  );
}
