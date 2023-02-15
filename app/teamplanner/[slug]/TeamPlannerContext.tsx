"use client";

import { createContext } from "react";

type TeamPlannerContextType = {
  teamPlannerDex: any;
  version: any;
};

const TeamPlannerContext = createContext<TeamPlannerContextType | undefined>(
  undefined
);

export default TeamPlannerContext;
