import React, { useContext, useEffect, useState } from "react";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import { PokemonData, VersionData } from "@/types/types";

interface NativeRegionOnlyFilterProps {
  isPreventTypeOverlapEnabled: boolean;
  isNativeRegionOnlyEnabled: boolean;
  setIsNativeRegionOnlyEnabled: Function;
}

interface TeamPlannerContextProps {
  teamMembers: PokemonData[];
  teamPlannerDex: PokemonData[];
  initialTeamPlannerDex: PokemonData[];
  setTeamPlannerDex: Function;
  version: VersionData;
}

export default function NativeRegionOnlyFilter({
  isPreventTypeOverlapEnabled,
  isNativeRegionOnlyEnabled,
  setIsNativeRegionOnlyEnabled,
}: NativeRegionOnlyFilterProps) {
  let {
    teamPlannerDex,
    initialTeamPlannerDex,
    setTeamPlannerDex,
    version,
  }: TeamPlannerContextProps = useContext(TeamPlannerContext);

  function nativeRegionOnly(isNativeRegionOnlyEnabled: boolean) {
    if (isNativeRegionOnlyEnabled) {
      let filteredDex;
      if (isPreventTypeOverlapEnabled) {
        filteredDex = teamPlannerDex.filter((pokemon) => {
          return version.region_id === pokemon.pokemon_species.region_id;
        });
      } else {
        filteredDex = initialTeamPlannerDex.filter((pokemon) => {
          return version.region_id === pokemon.pokemon_species.region_id;
        });
      }
      setTeamPlannerDex([...filteredDex]);
    } else {
      if (!isPreventTypeOverlapEnabled) {
        setTeamPlannerDex([...initialTeamPlannerDex]);
      }
    }
  }

  useEffect(() => {
    nativeRegionOnly(isNativeRegionOnlyEnabled);
  }, [isNativeRegionOnlyEnabled, isPreventTypeOverlapEnabled]);

  function toggleNativeRegionOnly() {
    setIsNativeRegionOnlyEnabled(!isNativeRegionOnlyEnabled);
  }

  return (
    <div
      onClick={toggleNativeRegionOnly}
      className={`text-center text-sm rounded px-2 py-1 cursor-pointer border border-zinc-700 hover:border-green-500 ${
        isNativeRegionOnlyEnabled ? "bg-green-700" : "bg-[#232323]"
      }`}
    >
      Native Region Only
    </div>
  );
}
