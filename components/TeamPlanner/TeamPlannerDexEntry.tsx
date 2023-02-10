import Image from "next/image";

interface Props {
  pokemon: any;
  version: any;
}

export default function TeamPlannerDexEntry({ pokemon, version }: Props) {
  return (
    <div className="flex flex-col flex-none cursor-pointer justify-center items-center h-36 w-28 rounded-md bg-stone-100 text-black text-m font-medium hover:bg-green-300">
      <Image
        src={`/sprites/pokemon/versions/generation-${version.generation_id}/${version.identifier}/${pokemon.pokemon_species.id}.png`}
        width={80}
        height={80}
        alt={pokemon.pokemon_species.name}
      />
      <div className="flex flex-col justify-center items-center w-full px-1 text-black text-sm font-medium">
        <p>#{pokemon.pokedex_number}</p>
        <p>{pokemon.pokemon_species.name}</p>
      </div>
      <div className="flex justify-evenly w-full">
        <p>T1</p>
        <p>T2</p>
      </div>
    </div>
  );
}
