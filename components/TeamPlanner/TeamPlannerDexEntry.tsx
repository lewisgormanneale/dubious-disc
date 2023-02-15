import Image from "next/image";
import TypeBox from "../TypeBox";
import { typeInfo } from "@/lib/typeInfo";

interface Props {
  pokemon: any;
  version: any;
}

export default function TeamPlannerDexEntry({ pokemon, version }: Props) {
  const primaryTypeInfo = typeInfo[pokemon.pokemon.type_id_slot_1];
  const { type_color } = primaryTypeInfo ?? {
    type_color: "",
  };

  return (
    <div className="flex flex-col flex-none cursor-pointer justify-evenly items-center h-48 w-32 rounded-md bg-[#232323] border border-zinc-700 text-black text-m font-medium hover:bg-emerald-800">
      <div className="flex justify-start items-center w-11/12 flex-none box-border bg-black rounded-full border-rose-400 border ">
        <div className="flex justify-center items-center bg-white rounded-full px-2 py-1 h-full border-rose-400 border">
          <p className="text-xxs font-medium text-black">
            #{pokemon.pokedex_number}
          </p>
        </div>
        <div className="flex justify-start items-center bg-black h-full rounded-xl ml-1 mr-2">
          <p className="text-white text-xxs font-semibold">
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
        className={`rounded border-rose-400 border ${type_color}`}
      />
      <div className="flex justify-evenly w-full">
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
