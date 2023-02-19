import React, { useContext, useEffect, useState } from "react";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import { PokemonData, VersionData } from "@/types/types";

interface TeamPlannerContextProps {
  teamMembers: PokemonData[];
  teamPlannerDex: PokemonData[];
  initialTeamPlannerDex: PokemonData[];
  setTeamPlannerDex: Function;
  version: VersionData;
}

export default function NativeRegionOnlyFilter() {
  let {
    teamMembers,
    teamPlannerDex,
    initialTeamPlannerDex,
    setTeamPlannerDex,
    version,
  }: TeamPlannerContextProps = useContext(TeamPlannerContext);

  const [isNativeRegionOnlyEnabled, setIsNativeRegionOnlyEnabled] =
    useState(false);

  function nativeRegionOnly(isNativeRegionOnlyEnabled: boolean) {
    if (isNativeRegionOnlyEnabled) {
      const filteredDex = teamPlannerDex.filter((pokemon) => {
        return version.region_id === pokemon.pokemon_species.region_id;
      });
      setTeamPlannerDex([...filteredDex]);
    } else {
      setTeamPlannerDex([...initialTeamPlannerDex]);
    }
  }

  useEffect(() => {
    nativeRegionOnly(isNativeRegionOnlyEnabled);
  }, [teamMembers, isNativeRegionOnlyEnabled]);

  function toggleNativeRegionOnly() {
    setIsNativeRegionOnlyEnabled(!isNativeRegionOnlyEnabled);
  }

  return (
    <div
      onClick={toggleNativeRegionOnly}
      className={`text-center text-sm rounded px-2 py-1 cursor-pointer border border-zinc-700 hover:bg-green-500 ${
        isNativeRegionOnlyEnabled ? "bg-green-700" : "bg-[#232323]"
      }`}
    >
      Native Region Only
    </div>
  );
}
