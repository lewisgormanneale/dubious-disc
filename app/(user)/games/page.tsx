import { GameSelectCard } from "@/components/TeamPlanner/GameSelectCard";
import { teamPlannerGames } from "@/lib/teamplannergames";

export const metadata = {
  title: "Games",
};

export default async function Games() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-l font-semibold text-white mt-5">Select a game:</p>
      <div className="mb-5">
        {teamPlannerGames.map((section) => {
          return (
            <div key={section.name} className="pt-5">
              <div className="flex item-center justify-center mb-2 px-3 mt-5 pb-5 text-xs font-semibold uppercase tracking-wider text-green-300">
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
    </div>
  );
}
