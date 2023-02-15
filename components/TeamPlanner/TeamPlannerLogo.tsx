import React from "react";

export default function TeamPlannerLogo({ version }: any) {
  return (
    <h1 className="text-green-300 text-xl font-bold my-5">
      Pokémon {version.name} Team Planner
    </h1>
  );
}
