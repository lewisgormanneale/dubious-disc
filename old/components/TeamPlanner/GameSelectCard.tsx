import { type Game } from "../../lib/teamplannergames";
import Link from "next/link";

export function GameSelectCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/teamplanner/${game.slug}`}
      className="flex justify-center items-center text-center w-56 h-14 rounded-md px-3 py-2 text-m  font-medium text-white bg-[#232323] border border-zinc-700 hover:bg-emerald-800"
    >
      {game.name}
    </Link>
  );
}
