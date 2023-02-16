import React from "react";
import Image from "next/image";

export default function TeamMember({ pokemon, showAdditionalInfo }: any) {
  return (
    <div>
      <Image
        src={`/sprites/pokemon/${pokemon.pokemon.id}.png`}
        key={pokemon.pokemon.id}
        width={100}
        height={100}
        quality={100}
        alt={pokemon.pokemon_species.name}
      />
      {showAdditionalInfo && <p>{pokemon.pokemon_species.name}</p>}
    </div>
  );
}
