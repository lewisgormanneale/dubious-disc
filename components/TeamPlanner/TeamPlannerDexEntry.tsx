import Image from "next/image";
import TypeBox from "../TypeBox";
import { typeInfo } from "@/lib/typeInfo";
import { useContext } from "react";
import TeamPlannerContext from "@/app/teamplanner/[slug]/TeamPlannerContext";

interface Props {
  pokemon: any;
}

export default function TeamPlannerDexEntry({ pokemon }: Props) {
  const { teamMembers, setTeamMembers }: any = useContext(TeamPlannerContext);

  function AddToTeam() {
    if (teamMembers.length < 6) {
      setTeamMembers((prev: any) => [...prev, pokemon]);
    }
  }

  const primaryTypeInfo = typeInfo[pokemon.pokemon.type_id_slot_1];
  const { type_color } = primaryTypeInfo ?? {
    type_color: "",
  };

  return (
    <div
      className="flex flex-col justify-start items-center flex-none cursor-pointer rounded bg-[#232323] border border-zinc-700 text-black text-m font-medium hover:bg-emerald-800"
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
        className={`${type_color}`}
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
