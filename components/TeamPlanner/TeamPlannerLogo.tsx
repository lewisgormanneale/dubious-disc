"use client";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import React from "react";
import { useContext } from "react";

export default function TeamPlannerLogo() {
  const { version }: any = useContext(TeamPlannerContext);
  return (
    <h1 className="text-green-300 text-xl font-bold my-5">
      Pokémon {version.name} Team Planner
    </h1>
  );
}
