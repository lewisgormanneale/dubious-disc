import React, { useContext, useEffect, useState } from "react";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import { PokemonData, VersionData } from "@/types/types";
import PreventTypeOverlapFilter from "./PreventTypeOverlapFilter";

interface TeamPlannerContextProps {
  teamMembers: PokemonData[];
  teamPlannerDex: PokemonData[];
  setTeamPlannerDex: Function;
  version: VersionData;
}

export default function Filters() {
  let {
    teamMembers,
    teamPlannerDex,
    setTeamPlannerDex,
    version,
  }: TeamPlannerContextProps = useContext(TeamPlannerContext);

  return (
    <div className="flex flex-col gap-2 justify-between items-center w-full px-2 border-b border-zinc-700 text-white  md:flex-row">
      <div className="flex gap-2 mt-2 md:my-2">
        <div className="text-center text-sm rounded px-2 py-1 cursor-pointer bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Native Region Only
        </div>
        <PreventTypeOverlapFilter />
      </div>
      <div className="flex gap-2 mb-2 md:my-2">
        <div className=" text-center text-sm rounded px-2 py-1 cursor-pointer bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Version Filter
        </div>
        <div className="text-center text-sm rounded px-2 py-1 cursor-pointer bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Type Filter
        </div>
        <div className=" text-center text-sm rounded px-2 py-1 cursor-pointer bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          HM Filter
        </div>
      </div>
    </div>
  );
}
