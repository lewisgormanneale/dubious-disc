import { type Game } from "../../lib/teamplannergames";
import Link from "next/link";

export function GameSelectCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/teamplanner/${game.slug}`}
      className="block rounded-md px-3 py-2 text-sm font-medium hover:text-rose-400text-white hover:bg-gray-800"
    >
      {game.name}
    </Link>
  );
}
