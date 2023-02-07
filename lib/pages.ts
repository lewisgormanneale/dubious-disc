export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const pages: { name: string; pages: Item[] }[] = [
  {
    name: "Tools",
    pages: [
      {
        name: "Pokémon Team Planner",
        slug: "teamplanner",
        description: "",
      },
      {
        name: "Shiny Rate Calculator",
        slug: "shinyratecalculator",
        description: "",
      },
    ],
  },
  {
    name: "Mainline Games",
    pages: [
      {
        name: "Pokémon Scarlet & Violet",
        slug: "games/sv",
        description: "",
      },
      {
        name: "Pokémon Legends: Arceus",
        slug: "games/pla",
        description: "",
      },
      {
        name: "Pokémon Sword & Shield",
        slug: "games/swsh",
        description: "",
      },
      {
        name: "Pokémon Lets Go, Pikachu! & Lets Go, Eevee!",
        slug: "games/lgpe",
        description: "",
      },
      {
        name: "Pokémon Ultra Sun & Ultra Moon",
        slug: "games/usum",
        description: "",
      },
      {
        name: "Pokémon Sun & Moon",
        slug: "games/sm",
        description: "",
      },
      {
        name: "Pokémon X & Y",
        slug: "games/xy",
        description: "",
      },
      {
        name: "Pokémon Black 2 & White 2",
        slug: "games/b2w2",
        description: "",
      },
      {
        name: "Pokémon Black & White",
        slug: "games/bw",
        description: "",
      },
      {
        name: "Pokémon HeartGold & SoulSilver",
        slug: "games/hgss",
        description: "",
      },
      {
        name: "Pokémon Platinum",
        slug: "games/platinum",
        description: "",
      },
      {
        name: "Pokémon Diamond & Pearl",
        slug: "games/dp",
        description: "",
      },
      {
        name: "Pokémon Emerald",
        slug: "games/emerald",
        description: "",
      },
      {
        name: "Pokémon Ruby & Sapphire",
        slug: "games/rs",
        description: "",
      },
      {
        name: "Pokémon Crystal",
        slug: "games/crystal",
        description: "",
      },
      {
        name: "Pokémon Gold & Silver",
        slug: "games/gs",
        description: "",
      },
      {
        name: "Pokémon Yellow",
        slug: "games/yellow",
        description: "",
      },
      {
        name: "Pokémon Red & Blue",
        slug: "games/rb",
        description: "",
      },
    ],
  },
  {
    name: "Spin-Off Games",
    pages: [
      {
        name: "Pokémon GO",
        slug: "games/go",
        description: "",
      },
      {
        name: "Pokémon XD: Gale Of Darkness",
        slug: "games/xd",
        description: "",
      },
      {
        name: "Pokémon Colosseum",
        slug: "games/colosseum",
        description: "",
      },
    ],
  },
];
