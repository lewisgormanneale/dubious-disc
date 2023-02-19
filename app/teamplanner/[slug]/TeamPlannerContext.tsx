"use client";

import { createContext } from "react";
import { PokemonData, VersionData } from "@/types/types";

type TeamPlannerContextType = {
  teamPlannerDex: PokemonData[]; // this is the list of all pokemon in the dex
  setTeamPlannerDex: Function;
  version: VersionData;
  teamMembers: PokemonData[]; // this is the list of pokemon in the team
  setTeamMembers: Function;
};

const initialData = {
  teamPlannerDex: [],
  setTeamPlannerDex: () => {},
  version: {
    id: 0,
    name: "",
    identifier: "",
    generation_id: 0,
    pokedex_version_groups: [],
  },
  teamMembers: [],
  setTeamMembers: () => {},
};

const TeamPlannerContext = createContext<TeamPlannerContextType>(initialData);

export default TeamPlannerContext;
