import React, { useContext } from "react";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import { PokemonData, VersionData } from "@/types/types";

interface FilterProps {
  teamMembers: PokemonData[];
  teamPlannerDex: PokemonData[];
  setTeamPlannerDex: Function;
  version: VersionData;
}

export default function Filters() {
  let { teamMembers, teamPlannerDex, setTeamPlannerDex, version }: FilterProps =
    useContext(TeamPlannerContext);

  function preventTypeOverlap() {
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
  }

  return (
    <div className="flex flex-col gap-2 justify-between items-center w-full px-2 border-b border-zinc-700 text-white  md:flex-row">
      <div className="flex gap-2 mt-2 md:my-2">
        <div className="text-center text-sm rounded px-2 py-1 cursor-pointer bg-[#232323] border border-zinc-700 hover:bg-emerald-800">
          Native Region Only
        </div>
        <div
          onClick={preventTypeOverlap}
          className=" text-center text-sm rounded px-2 py-1 cursor-pointer bg-[#232323] border border-zinc-700 hover:bg-emerald-800"
        >
          Prevent Type Overlap
        </div>
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
