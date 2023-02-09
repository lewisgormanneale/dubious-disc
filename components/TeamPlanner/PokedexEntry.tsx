export default function PokedexEntry({ pokemon }: any) {
  return (
    <div className="pokedex-entry h-80 w-50 bg-white text-black flex flex-col justify-center items-center">
      <div className="pokedex-entry-name-and-id">
        <p>ID</p>
        <p>{pokemon.pokemon_species.name}</p>
      </div>
      <p>Image here</p>
      <p>Type 1 svg</p>
      <p>Type 2 svg</p>
    </div>
  );
}
