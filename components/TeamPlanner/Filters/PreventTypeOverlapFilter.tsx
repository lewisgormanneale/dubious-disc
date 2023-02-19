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

export default function PreventTypeOverlapFilter() {
  let {
    teamMembers,
    teamPlannerDex,
    initialTeamPlannerDex,
    setTeamPlannerDex,
  }: TeamPlannerContextProps = useContext(TeamPlannerContext);

  const [isPreventTypeOverlapEnabled, setIsPreventTypeOverlapEnabled] =
    useState(false);

  function preventTypeOverlap(isPreventTypeOverlapEnabled: boolean) {
    if (isPreventTypeOverlapEnabled) {
      const types1 = teamMembers
        .map((member) => member.pokemon.type_id_slot_1)
        .filter(Boolean);
      const types2 = teamMembers
        .map((member) => member.pokemon.type_id_slot_2)
        .filter(Boolean);
      const filteredDex = teamPlannerDex.filter((pokemon) => {
        const pokemonType1 = pokemon.pokemon.type_id_slot_1;
        const pokemonType2 = pokemon.pokemon.type_id_slot_2;
        return (
          (!pokemonType1 || !types1.includes(pokemonType1)) &&
          (!pokemonType2 || !types1.includes(pokemonType2)) &&
          (!pokemonType1 || !types2.includes(pokemonType1)) &&
          (!pokemonType2 || !types2.includes(pokemonType2))
        );
      });
      setTeamPlannerDex([...filteredDex]);
    } else {
      console.log("initialTeamPlannerDex", initialTeamPlannerDex);
      setTeamPlannerDex([...initialTeamPlannerDex]);
    }
  }

  useEffect(() => {
    preventTypeOverlap(isPreventTypeOverlapEnabled);
  }, [teamMembers, isPreventTypeOverlapEnabled]);

  function togglePreventTypeOverlap() {
    setIsPreventTypeOverlapEnabled(!isPreventTypeOverlapEnabled);
  }

  return (
    <div
      onClick={togglePreventTypeOverlap}
      className={`text-center text-sm rounded px-2 py-1 cursor-pointer border border-zinc-700 hover:bg-emerald-800 ${
        isPreventTypeOverlapEnabled ? "bg-emerald-800" : "bg-[#232323]"
      }`}
    >
      Prevent Type Overlap
    </div>
  );
}
