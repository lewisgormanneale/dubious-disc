import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import TeamMember from "./TeamMember";

export default function TeamMembers() {
  const { teamMembers, setTeamMembers }: any = useContext(TeamPlannerContext);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowAdditionalInfo(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex w-full border-y z-10 border-zinc-700 text-white">
      <div className="flex flex-wrap flex-shrink w-11/12  gap-3 justify-center items-center ">
        {teamMembers.length > 0 ? (
          teamMembers.map((pokemon: any) => (
            <TeamMember
              key={uuidv4()}
              pokemon={pokemon}
              showAdditionalInfo={showAdditionalInfo}
            />
          ))
        ) : (
          <p className="text-white py-16">
            Select a Pokémon to start adding to your team!
          </p>
        )}
      </div>
      <div className="flex flex-col w-1/12 bg-white text-white">
        <div className="flex justify-center items-center text-center text-xs h-1/3 bg-[#232323] border-l border-zinc-700 hover:bg-emerald-800 cursor-pointer">
          ^
        </div>
        <div className="flex justify-center items-center text-center text-xs h-1/3 bg-[#232323] border border-zinc-700 hover:bg-emerald-800 cursor-pointer">
          Evaluate Team
        </div>
        <div className="flex justify-center items-center text-center text-xs h-1/3 bg-[#232323] border-l border-zinc-700 hover:bg-emerald-800 cursor-pointer">
          FAQ
        </div>
      </div>
    </div>
  );
}
