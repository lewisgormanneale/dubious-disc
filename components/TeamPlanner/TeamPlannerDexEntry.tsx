export default function TeamPlannerDexEntry({ pokemon }: any) {
  return (
    <div className="flex flex-col flex-none justify-center items-center h-36 w-36 rounded-md bg-white text-black text-m font-medium">
      <p>Image here</p>
      <div className="flex justify-evenly w-full">
        <p>#{pokemon.pokedex_number}</p>
        <p>{pokemon.pokemon_species.name}</p>
      </div>
      <div className="flex justify-evenly w-full">
        <p>1</p>
        <p>2</p>
      </div>
    </div>
  );
}
