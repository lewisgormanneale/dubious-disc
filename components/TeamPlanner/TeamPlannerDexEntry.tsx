import Image from "next/image";

interface Props {
  pokemon: any;
  version: any;
}

export default function TeamPlannerDexEntry({ pokemon, version }: Props) {
  return (
    <div className="flex flex-col flex-none cursor-pointer justify-evenly items-center h-44 w-32 pt-3 rounded-md bg-[#232323] border border-zinc-700 text-black text-m font-medium hover:bg-emerald-800">
      <div className="flex justify-start items-center w-11/12 flex-none mt-3 mb-2 box-border bg-black rounded-full border-white border ">
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
        src={`/sprites/pokemon/versions/generation-${version.generation_id}/${version.identifier}/${pokemon.pokemon_species.id}.png`}
        width={90}
        height={90}
        alt={pokemon.pokemon_species.name}
        className="rounded border-rose-400 border p-1 bg-blue-200"
      />
      <div className="flex flex-col justify-center items-start w-full px-3 mb-2 mt-0 pt-0">
        <p className="text-xxs text-white">HM Icons?</p>
      </div>
      <div className="flex justify-evenly w-full mb-5">
        <div className="flex justify-center items-center rounded bg-lime-500 w-5/12">
          <p className="text-xxs px-1 py-0 by-0">Grass</p>
        </div>
        <div className="flex justify-center items-center rounded bg-purple-500 w-5/12">
          <p className="text-xxs px-1 py-0 by-0 text-white">Poison</p>
        </div>
      </div>
    </div>
  );
}
