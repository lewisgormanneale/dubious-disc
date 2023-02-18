import Image from "next/image";
import TypeIcon from "../TypeIcon";

interface FAQProps {
  showFAQ: boolean;
}

export default function FAQ({ showFAQ }: FAQProps) {
  return (
    <section
      className={`flex flex-col justify-center text-white p-8 border-b border-zinc-700 ${
        showFAQ ? "h-full display" : "hidden"
      }`}
    >
      <h2 className="text-green-300 text-xl text-center font-bold mb-4">FAQ</h2>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-300">
        What Is This Tool For?
      </h3>
      <p>
        You can use the Pokémon Team Planner to plan out a team of Pokémon that
        you want to use in one of the mainline RPG series. While some players
        like to decide on team members as they go, this tool is designed to help
        those who prefer to plan in advance.
      </p>
    </section>
  );
}
