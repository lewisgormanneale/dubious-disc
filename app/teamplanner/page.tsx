import { teamplannergames } from "../../lib/teamplannergames";
import { GameSelectCard } from "@/components/TeamPlanner/GameSelectCard";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = response.json();
  return data;
}

export default async function TeamPlanner() {
  const data = await getData();

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1>Welcome to the Pokémon Team Planner</h1>
      <p>Select a game to get started</p>
      <div>
        {teamplannergames.map((section) => {
          return (
            <div key={section.name}>
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-white">
                <div>{section.name}</div>
              </div>
              <div className="flex flex-wrap">
                {section.games.map((game) => (
                  <GameSelectCard key={game.slug} game={game} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
