export type Game = {
  name: string;
  slug: string;
  description?: string;
};

export const teamplannergames: { name: string; games: Game[] }[] = [
  {
    name: "Mainline Games",
    games: [
      {
        name: "Pokémon Scarlet & Violet",
        slug: "sv",
        description: "",
      },
      {
        name: "Pokémon Legends: Arceus",
        slug: "pla",
        description: "",
      },
      {
        name: "Pokémon Sword & Shield",
        slug: "swsh",
        description: "",
      },
      {
        name: "Pokémon Lets Go, Pikachu! & Lets Go, Eevee!",
        slug: "lgpe",
        description: "",
      },
      {
        name: "Pokémon Ultra Sun & Ultra Moon",
        slug: "usum",
        description: "",
      },
      {
        name: "Pokémon Sun & Moon",
        slug: "sm",
        description: "",
      },
      {
        name: "Pokémon X & Y",
        slug: "xy",
        description: "",
      },
      {
        name: "Pokémon Black 2 & White 2",
        slug: "b2w2",
        description: "",
      },
      {
        name: "Pokémon Black & White",
        slug: "bw",
        description: "",
      },
      {
        name: "Pokémon HeartGold & SoulSilver",
        slug: "hgss",
        description: "",
      },
      {
        name: "Pokémon Platinum",
        slug: "platinum",
        description: "",
      },
      {
        name: "Pokémon Diamond & Pearl",
        slug: "dp",
        description: "",
      },
      {
        name: "Pokémon Emerald",
        slug: "emerald",
        description: "",
      },
      {
        name: "Pokémon Ruby & Sapphire",
        slug: "rs",
        description: "",
      },
      {
        name: "Pokémon Crystal",
        slug: "crystal",
        description: "",
      },
      {
        name: "Pokémon Gold & Silver",
        slug: "gs",
        description: "",
      },
      {
        name: "Pokémon Yellow",
        slug: "yellow",
        description: "",
      },
      {
        name: "Pokémon Red & Blue",
        slug: "rb",
        description: "",
      },
    ],
  },
  {
    name: "Spin-Off Games",
    games: [
      {
        name: "Pokémon XD: Gale Of Darkness",
        slug: "xd",
        description: "",
      },
      {
        name: "Pokémon Colosseum",
        slug: "colosseum",
        description: "",
      },
    ],
  },
];
