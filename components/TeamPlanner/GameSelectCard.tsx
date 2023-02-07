"use client";

import { type Game } from "../../lib/teamplannergames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

export function GameSelectCard({ game }: { game: Game }) {
  const segment = useSelectedLayoutSegment();
  const isActive = game.slug === segment;

  return (
    <Link
      href={`/teamplanner/${game.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-rose-400",
        {
          "text-white hover:bg-gray-800": !isActive,
          "text-white bg-rose-500 hover:text-white": isActive,
        }
      )}
    >
      {game.name}
    </Link>
  );
}
