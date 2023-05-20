import React, { useContext, useEffect, useState } from "react";
import TeamPlannerContext from "@/app/(user)/teamplanner/[slug]/TeamPlannerContext";
import { PokemonData, VersionData } from "@/types/types";

interface PreventTypeOverlapFilterProps {
  isPreventTypeOverlapEnabled: boolean;
  setIsPreventTypeOverlapEnabled: Function;
  isNativeRegionOnlyEnabled: boolean;
}

interface TeamPlannerContextProps {
  teamMembers: PokemonData[];
  teamPlannerDex: PokemonData[];
  initialTeamPlannerDex: PokemonData[];
  setTeamPlannerDex: Function;
  version: VersionData;
}

export default function PreventTypeOverlapFilter({
  isPreventTypeOverlapEnabled,
  setIsPreventTypeOverlapEnabled,
  isNativeRegionOnlyEnabled,
}: PreventTypeOverlapFilterProps) {
  let {
    teamMembers,
    teamPlannerDex,
    initialTeamPlannerDex,
    setTeamPlannerDex,
    version,
  }: TeamPlannerContextProps = useContext(TeamPlannerContext);

  function preventTypeOverlap(isPreventTypeOverlapEnabled: boolean) {
    if (isPreventTypeOverlapEnabled) {
      const types1 = teamMembers
        .map((member) => member.pokemon.type_id_slot_1)
        .filter(Boolean);
      const types2 = teamMembers
        .map((member) => member.pokemon.type_id_slot_2)
        .filter(Boolean);
      let filteredDex;
      if (isNativeRegionOnlyEnabled) {
        filteredDex = teamPlannerDex.filter((pokemon) => {
          const pokemonType1 = pokemon.pokemon.type_id_slot_1;
          const pokemonType2 = pokemon.pokemon.type_id_slot_2;
          return (
            types1.indexOf(pokemonType1) === -1 &&
            types2.indexOf(pokemonType1) === -1 &&
            types1.indexOf(pokemonType2) === -1 &&
            types2.indexOf(pokemonType2) === -1 &&
            version.region_id === pokemon.pokemon_species.region_id
          );
        });
      } else {
        filteredDex = initialTeamPlannerDex.filter((pokemon) => {
          const pokemonType1 = pokemon.pokemon.type_id_slot_1;
          const pokemonType2 = pokemon.pokemon.type_id_slot_2;
          return (
            types1.indexOf(pokemonType1) === -1 &&
            types2.indexOf(pokemonType1) === -1 &&
            types1.indexOf(pokemonType2) === -1 &&
            types2.indexOf(pokemonType2) === -1
          );
        });
      }
      setTeamPlannerDex(filteredDex);
    } else {
      if (!isNativeRegionOnlyEnabled) {
        setTeamPlannerDex(initialTeamPlannerDex);
      }
    }
  }

  useEffect(() => {
    preventTypeOverlap(isPreventTypeOverlapEnabled);
  }, [teamMembers, isPreventTypeOverlapEnabled, isNativeRegionOnlyEnabled]);

  function togglePreventTypeOverlap() {
    setIsPreventTypeOverlapEnabled(!isPreventTypeOverlapEnabled);
  }

  return (
    <div
      onClick={togglePreventTypeOverlap}
      className={`text-center text-sm rounded px-2 py-1 cursor-pointer border border-zinc-700 hover:border-green-500 ${
        isPreventTypeOverlapEnabled ? "bg-green-700" : "bg-[#232323]"
      }`}
    >
      Prevent Type Overlap
    </div>
  );
}
