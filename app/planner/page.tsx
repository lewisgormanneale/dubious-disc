import PokedexEntry from "@/components/PokedexEntry";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = response.json();
  return data;
}

export default async function Planner() {
  const data = await getData();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1>Pokémon Team Planner</h1>
      <p>Select a game to get started</p>
      {/* game select component */}
      {/* faq component */}
      <div className="flex flex-wrap flex-shrink">
        {data.results.map((pokedexEntry: any) => (
          <PokedexEntry key={pokedexEntry.id} />
        ))}
      </div>
    </main>
  );
}
