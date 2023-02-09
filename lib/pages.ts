export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const pages: { name: string; pages: Item[] }[] = [
  {
    name: "General Tools & Resources",
    pages: [
      {
        name: "Pokédex",
        slug: "pokedex",
        description: "",
      },
      {
        name: "Team Planner",
        slug: "teamplanner",
        description: "",
      },
      {
        name: "Shiny Rate Calculator",
        slug: "shinyratecalculator",
        description: "",
      },
      {
        name: "Catch Rate Calculator",
        slug: "catchratecalculator",
        description: "",
      },
    ],
  },
  {
    name: "Mainline Games",
    pages: [
      {
        name: "Scarlet & Violet",
        slug: "games/scarlet-violet",
        description: "",
      },
      {
        name: "Legends: Arceus",
        slug: "games/legends-arceus",
        description: "",
      },
      {
        name: "Brilliant Diamond & Shining Pearl",
        slug: "games/brilliant-diamond-shining-pearl",
        description: "",
      },
      {
        name: "Sword & Shield",
        slug: "games/sword-shield",
        description: "",
      },
      {
        name: "Let's Go, Pikachu! & Let's Go, Eevee!",
        slug: "games/lets-go-pikachu-lets-go-eevee",
        description: "",
      },
      {
        name: "Ultra Sun & Ultra Moon",
        slug: "games/ultra-sun-ultra-moon",
        description: "",
      },
      {
        name: "Sun & Moon",
        slug: "games/sun-moon",
        description: "",
      },
      {
        name: "Omega Ruby & Alpha Sapphire",
        slug: "games/omega-ruby-alpha-sapphire",
        description: "",
      },
      {
        name: "X & Y",
        slug: "games/x-y",
        description: "",
      },
      {
        name: "Black 2 & White 2",
        slug: "games/black-2-white-2",
        description: "",
      },
      {
        name: "Black & White",
        slug: "games/black-white",
        description: "",
      },
      {
        name: "HeartGold & SoulSilver",
        slug: "games/heartgold-soulsilver",
        description: "",
      },
      {
        name: "Platinum",
        slug: "games/platinum",
        description: "",
      },
      {
        name: "Diamond & Pearl",
        slug: "games/diamond-pearl",
        description: "",
      },
      {
        name: "FireRed & LeafGreen",
        slug: "games/firered-leafgreen",
        description: "",
      },
      {
        name: "Emerald",
        slug: "games/emerald",
        description: "",
      },
      {
        name: "Ruby & Sapphire",
        slug: "games/ruby-sapphire",
        description: "",
      },
      {
        name: "Crystal",
        slug: "games/crystal",
        description: "",
      },
      {
        name: "Gold & Silver",
        slug: "games/gold-silver",
        description: "",
      },
      {
        name: "Yellow",
        slug: "games/yellow",
        description: "",
      },
      {
        name: "Red & Blue",
        slug: "games/red-blue",
        description: "",
      },
    ],
  },
  {
    name: "Spin-Off Games",
    pages: [
      {
        name: "GO",
        slug: "games/go",
        description: "",
      },
      {
        name: "Conquest",
        slug: "games/conquest",
        description: "",
      },
      {
        name: "XD: Gale Of Darkness",
        slug: "games/xd",
        description: "",
      },
      {
        name: "Colosseum",
        slug: "games/colosseum",
        description: "",
      },
    ],
  },
];
