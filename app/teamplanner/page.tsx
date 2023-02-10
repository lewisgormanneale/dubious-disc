import { teamplannergames } from "../../lib/teamplannergames";
import { GameSelectCard } from "@/components/TeamPlanner/GameSelectCard";

export default async function Page() {
  return (
    <section className="flex flex-col items-center text-white">
      <h1>Welcome to the Pokémon Team Planner!</h1>
      <p>Select a game to get started</p>
      <div>
        {teamplannergames.map((section) => {
          return (
            <div key={section.name}>
              <div className="mb-2 px-3 mt-5 text-xs font-semibold uppercase tracking-wider text-green-300">
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
