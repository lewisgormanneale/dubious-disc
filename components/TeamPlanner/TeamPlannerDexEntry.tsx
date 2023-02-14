import Image from "next/image";
import TypeBox from "../TypeBox";

interface Props {
  pokemon: any;
  version: any;
}

export default function TeamPlannerDexEntry({ pokemon, version }: Props) {
  return (
    <div className="flex flex-col flex-none cursor-pointer justify-evenly items-center h-48 w-32 rounded-md bg-[#232323] border border-zinc-700 text-black text-m font-medium hover:bg-emerald-800">
      <div className="flex justify-start items-center w-11/12 flex-none box-border bg-black rounded-full border-rose-400 border ">
        <div className="flex justify-center items-center bg-white rounded-full px-2 py-1 border-rose-400 border">
          <p className="text-xxs font-medium text-black">
            #{pokemon.pokedex_number}
          </p>
        </div>
        <div className="flex justify-start items-center bg-black h-full w-fullrounded ml-1">
          <p className="text-white text-xxs font-semibold ">
            {pokemon.pokemon_species.name}
          </p>
        </div>
      </div>
      <Image
        src={`/sprites/pokemon/${pokemon.pokemon.id}.png`}
        width={100}
        height={100}
        alt={pokemon.pokemon_species.name}
        className="rounded border-rose-400 border bg-blue-200"
      />
      <div className="flex justify-evenly w-full">
        <TypeBox type_id={pokemon.pokemon.type_id_slot_1} />
        {pokemon.pokemon.type_id_slot_2 ? (
          <TypeBox type_id={pokemon.pokemon.type_id_slot_2} />
        ) : null}
      </div>
    </div>
  );
}
