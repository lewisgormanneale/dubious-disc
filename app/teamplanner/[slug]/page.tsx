import FAQ from "@/components/TeamPlanner/FAQ";
import PokedexEntry from "@/components/TeamPlanner/PokedexEntry";
import { supabase } from "@/supabase";

async function getData(slug: string) {
  const { data: versionGroupData, error: versionGroupError } = await supabase
    .from("version_groups")
    .select("id, pokedex_version_groups(pokedex_id)")
    .eq("identifier", slug);
  if (versionGroupError) {
    console.log(versionGroupError);
  } else {
    const pokedexId = versionGroupData[0].pokedex_version_groups[0].pokedex_id;
    const { data: pokemonDexData, error: pokemonDexError } = await supabase
      .from("pokemon_dex_numbers")
      .select("species_id, pokedex_number, pokemon_species(*)")
      .eq("pokedex_id", pokedexId);
    if (pokemonDexError) {
      console.log(pokemonDexError);
    } else {
      return pokemonDexData;
    }
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1>Pokémon Team Planner</h1>
      <div className="flex flex-wrap flex-shrink">
        {data ? (
          data.map((pokemon: any) => (
            <PokedexEntry key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
      <FAQ />
    </main>
  );
}
