import type { Metadata } from "next";
import { teamPlannerGames } from "../../../lib/teamplannergames";
import { GameSelectCard } from "@/components/TeamPlanner/GameSelectCard";

export const metadata: Metadata = {
  title: "Team Planner",
  description: "Plan your Pokémon teams",
};

export default async function Page() {
  return (
    <section className="flex flex-col items-center text-white my-5">
      <h1 className="text-xl font-bold pb-2 text-green-400">
        Welcome to the Pokémon Team Planner!
      </h1>
      <p className="text-l font-semibold">Select a game to get started:</p>
      <div>
        {teamPlannerGames.map((section) => {
          return (
            <div key={section.name} className="pt-5">
              <div className="flex item-center justify-center mb-2 px-3 mt-5 pb-5 text-xs font-semibold uppercase tracking-wider text-green-400">
                <div>{section.name}</div>
              </div>
              <div className="flex flex-wrap gap-5 justify-center">
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
