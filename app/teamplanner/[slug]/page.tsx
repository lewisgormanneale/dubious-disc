import FAQ from "@/components/TeamPlanner/FAQ";
import PokedexEntry from "@/components/TeamPlanner/PokedexEntry";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = response.json();
  return data;
}

export default async function TeamPlanner() {
  const data = await getData();

  return (
    <main className="flex flex-col justify-center items-center">
      <h1>Pokémon Team Planner</h1>
      <div className="flex flex-wrap flex-shrink">
        {data.results.map((pokedexEntry: any) => (
          <PokedexEntry key={pokedexEntry.id} />
        ))}
      </div>
      <FAQ />
    </main>
  );
}
