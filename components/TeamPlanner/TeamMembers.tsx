import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import TeamMember from "./TeamMember";
import FAQ from "./FAQ";
import {
  MagnifyingGlassCircleIcon,
  QuestionMarkCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";

export default function TeamMembers() {
  const { teamMembers, setTeamMembers }: any = useContext(TeamPlannerContext);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(true);
  const [showFAQ, setShowFAQ] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowAdditionalInfo(window.scrollY < 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFAQ() {
    setShowFAQ(!showFAQ);
  }

  function toggleShiny(uuid: string) {
    setTeamMembers((prevTeamMembers: any) =>
      prevTeamMembers.map((pokemon: any) => {
        if (pokemon.uuid === uuid) {
          const updatedPokemon = {
            ...pokemon,
            sprite: getNewShinySprite(pokemon.sprite, pokemon.pokemon.id),
          };
          return updatedPokemon;
        }
        return pokemon;
      })
    );
  }

  function toggleGender(uuid: string) {
    setTeamMembers((prevTeamMembers: any) =>
      prevTeamMembers.map((pokemon: any) => {
        if (pokemon.uuid === uuid) {
          const updatedPokemon = {
            ...pokemon,
            gender: pokemon.gender === "male" ? "female" : "male",
            sprite: pokemon.pokemon_species.has_gender_differences
              ? getNewGenderSprite(pokemon.sprite, pokemon.pokemon.id)
              : pokemon.sprite,
          };
          return updatedPokemon;
        }
        return pokemon;
      })
    );
  }

  function removeFromTeam(uuid: string) {
    setTeamMembers((prevTeamMembers: any) =>
      prevTeamMembers.filter((pokemon: any) => pokemon.uuid !== uuid)
    );
  }

  const teamMemberDivs = [];
  for (let i = 0; i < teamMembers.length; i += 3) {
    const teamMemberSet = teamMembers.slice(i, i + 3);
    const teamMemberElements = teamMemberSet.map((pokemon: any) => (
      <TeamMember
        key={uuidv4()}
        uuid={uuidv4()}
        pokemon={pokemon}
        toggleShiny={() => toggleShiny(pokemon.uuid)}
        toggleGender={() => toggleGender(pokemon.uuid)}
        removeFromTeam={() => removeFromTeam(pokemon.uuid)}
        showAdditionalInfo={showAdditionalInfo}
      />
    ));
    teamMemberDivs.push(
      <div key={uuidv4()} className="flex gap-3 justify-center items-center">
        {teamMemberElements}
      </div>
    );
  }

  return (
    <div>
      <div
        className={`flex flex-col md:flex-row w-full border-y z-10 border-zinc-700 min-w-[355px] ${
          showAdditionalInfo ? "h-[210px]" : "h-[50px]"
        }}`}
      >
        <div className="flex flex-wrap w-full min-w-[355px] gap-3 justify-center items-center py-2">
          {teamMemberDivs.length > 0 ? (
            teamMemberDivs
          ) : (
            <p className="flex justify-center items-center text-center text-white p-9">
              Select a Pokémon to start adding to your team!
            </p>
          )}
        </div>
        <div className="flex md:flex-col w-full h-full md:w-[50px] text-white border-t border-zinc-700 md:border-none">
          <div
            onClick={scrollToTop}
            className="flex justify-center items-center h-full w-full bg-[#232323] border-l border-zinc-700 hover:bg-emerald-800 cursor-pointer"
          >
            <ArrowUpCircleIcon className="w-8 h-8 m-2" />
          </div>
          <div className="flex justify-center items-center h-full w-full bg-[#232323] border-x md:border border-zinc-700 hover:bg-emerald-800 cursor-pointer">
            <MagnifyingGlassCircleIcon className="w-8 h-8 m-2" />
          </div>
          <div
            onClick={toggleFAQ}
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
      <FAQ showFAQ={showFAQ} />
    </div>
  );
}

function getNewGenderSprite(sprite: string, id: number) {
  if (sprite.includes("female") && sprite.includes("shiny")) {
    return `/sprites/pokemon/shiny/${id}.png`;
  } else if (sprite.includes("female")) {
    return `/sprites/pokemon/${id}.png`;
  } else if (sprite.includes("shiny")) {
    return `/sprites/pokemon/shiny/female/${id}.png`;
  } else {
    return `/sprites/pokemon/female/${id}.png`;
  }
}

function getNewShinySprite(sprite: string, id: number) {
  if (sprite.includes("female") && sprite.includes("shiny")) {
    return `/sprites/pokemon/female/${id}.png`;
  } else if (sprite.includes("female")) {
    return `/sprites/pokemon/shiny/female/${id}.png`;
  } else if (sprite.includes("shiny")) {
    return `/sprites/pokemon/${id}.png`;
  } else {
    return `/sprites/pokemon/shiny/${id}.png`;
  }
}
