import Link from "next/link";

export default function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <div className="text-sm text-rose-200">Built with 🌸</div>
      </div>
      <div className="flex gap-2 items-center text-sm text-rose-200">
        <Link
          href={`https://pokeapi.co/`}
          className="block rounded-md px-3 py-2 text-sm font-medium hover:text-rose-400"
        >
          Powered by PokéAPI
        </Link>
        <p className="flex gap-2 items-center text-sm text-rose-200">|</p>
        <Link
          href={`/studio`}
          className="block rounded-md px-3 py-2 text-sm font-medium hover:text-rose-400"
        >
          Admin Studio
        </Link>
      </div>
    </div>
  );
}
