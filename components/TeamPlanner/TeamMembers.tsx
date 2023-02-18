import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import TeamMember from "./TeamMember";
import {
  MagnifyingGlassCircleIcon,
  QuestionMarkCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";

export default function TeamMembers() {
  const { teamMembers, setTeamMembers }: any = useContext(TeamPlannerContext);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowAdditionalInfo(window.scrollY < 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row w-full border-y z-10 border-zinc-700 min-w-[355px] ${
        showAdditionalInfo ? "h-[210px]" : "h-[50px]"
      }}`}
    >
      <div className="flex flex-wrap w-full min-w-[355px] gap-3 justify-center items-center py-2">
        {teamMembers.length > 0 ? (
          teamMembers.map((pokemon: any) => (
            <TeamMember
              key={uuidv4()}
              pokemon={pokemon}
              showAdditionalInfo={showAdditionalInfo}
            />
          ))
        ) : (
          <p className="flex justify-center items-center text-center text-white p-4">
            Select a Pokémon to start adding to your team!
          </p>
        )}
      </div>
      <div className="flex md:flex-col w-full h-full md:w-[50px] text-white border-t border-zinc-700 md:border-none">
        <div className="flex justify-center items-center h-full w-full bg-[#232323] border-l border-zinc-700 hover:bg-emerald-800 cursor-pointer">
          <ArrowUpCircleIcon className="w-8 h-8 m-2" />
        </div>
        <div className="flex justify-center items-center h-full w-full bg-[#232323] border-x md:border border-zinc-700 hover:bg-emerald-800 cursor-pointer">
          <MagnifyingGlassCircleIcon className="w-8 h-8 m-2" />
        </div>
        <div
          className={`flex justify-center items-center h-full w-full bg-[#232323] md:border-l border-zinc-700 hover:bg-emerald-800 cursor-pointer ${
            showAdditionalInfo && teamMembers.length > 0
              ? "md:border-b rounded-bl"
              : ""
          }`}
        >
          <QuestionMarkCircleIcon className="w-8 h-8 m-2" />
        </div>
      </div>
    </div>
  );
}
