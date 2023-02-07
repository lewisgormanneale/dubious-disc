import PokedexEntry from "@/components/PokedexEntry";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = response.json();
  return data;
}

export default async function TeamPlanner() {
  const data = await getData();

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-white">
      <h1>Welcome to the Pokémon Team Planner</h1>
      <p>Select a game to get started</p>
    </section>
  );
}
