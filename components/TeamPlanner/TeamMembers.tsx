import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import TeamPlannerDexEntry from "./TeamPlannerDexEntry";
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
    <div className="flex flex-wrap flex-shrink gap-3 justify-center items-center w-full border-y z-10 border-zinc-700 text-white">
      <p className="absolute top-4 right-4">^</p>
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
  );
}
