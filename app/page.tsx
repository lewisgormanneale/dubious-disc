import FAQ from "@/components/FAQ";
import GameSelect from "@/components/GameSelect";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <h1>Pokémon Team Planner</h1>
      <GameSelect />
      <FAQ />
    </main>
  );
}
