import Image from "next/image";
import TypeBox from "../TypeBox";
import { typeInfo } from "@/lib/typeInfo";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";
import { PokemonData } from "@/types/types";

interface TeamPlannerDexEntryProps {
  pokemon: PokemonData;
}

interface TeamPlannerContextProps {
  teamMembers: PokemonData[];
  setTeamMembers: Function;
}

export default function TeamPlannerDexEntry({
  pokemon,
}: TeamPlannerDexEntryProps) {
  const { teamMembers, setTeamMembers }: TeamPlannerContextProps =
    useContext(TeamPlannerContext);

  function AddToTeam() {
    if (teamMembers.length < 6) {
      pokemon.gender = calculateGender(pokemon.pokemon_species.gender_rate);
      setTeamMembers((prev: any) => [
        ...prev,
        {
          ...pokemon,
          uuid: uuidv4(),
          sprite: `/sprites/pokemon/${pokemon.pokemon.id}.png`,
        },
      ]);
    }
  }

  const primaryTypeInfo = typeInfo[pokemon.pokemon.type_id_slot_1];
  const { darker_type_color } = primaryTypeInfo ?? {
    darker_type_color: "",
  };

  return (
    <div
      className="flex flex-col justify-start items-center flex-none cursor-pointer rounded bg-[#232323] border border-zinc-700 text-black text-m font-medium transform hover:scale-110 transition duration-300"
      onClick={AddToTeam}
    >
      <div className="flex justify-start items-center w-full flex-none box-border bg-black rounded border-b border-zinc-700">
        <div className="flex justify-center items-center bg-white rounded-tl px-1 py-1 h-full border-zinc-700 border">
          <p className="text-xxs font-medium text-black">
            #{pokemon.pokedex_number}
          </p>
        </div>
        <div className="flex flex-wrap justify-start items-center bg-black h-full w-12 rounded-xl ml-1">
          <p className="text-white text-xxs font-semibold w-12">
            {pokemon.pokemon_species.name}
          </p>
        </div>
      </div>
      <Image
        src={`/sprites/pokemon/${pokemon.pokemon.id}.png`}
        key={pokemon.pokemon.id}
        width={100}
        height={100}
        quality={100}
        alt={pokemon.pokemon_species.name}
        className={`${darker_type_color}`}
      />
      <div className="flex justify-evenly w-full my-2">
        <TypeBox
          key={pokemon.pokemon.type_id_slot_1}
          type_id={pokemon.pokemon.type_id_slot_1}
        />
        {pokemon.pokemon.type_id_slot_2 ? (
          <TypeBox
            key={pokemon.pokemon.type_id_slot_2}
            type_id={pokemon.pokemon.type_id_slot_2}
          />
        ) : null}
      </div>
    </div>
  );
}

function calculateGender(genderRate: number) {
  if (genderRate === 8) {
    return "always-female";
  } else if (genderRate === 0) {
    return "always-male";
  } else if (genderRate === -1) {
    return "gender-unknown";
  } else {
    return "male";
  }
}
