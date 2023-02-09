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
        name: "Scarlet & Violet",
        slug: "scarlet-violet",
        description: "",
      },
      {
        name: "Legends: Arceus",
        slug: "legends-arceus",
        description: "",
      },
      {
        name: "Brilliant Diamond & Shining Pearl",
        slug: "brilliant-diamond-shining-pearl",
        description: "",
      },
      {
        name: "Sword & Shield",
        slug: "sword-shield",
        description: "",
      },
      {
        name: "Let's Go, Pikachu! & Let's Go, Eevee!",
        slug: "lets-go-pikachu-lets-go-eevee",
        description: "",
      },
      {
        name: "Ultra Sun & Ultra Moon",
        slug: "ultra-sun-ultra-moon",
        description: "",
      },
      {
        name: "Sun & Moon",
        slug: "sun-moon",
        description: "",
      },
      {
        name: "Omega Ruby & Alpha Sapphire",
        slug: "omega-ruby-alpha-sapphire",
        description: "",
      },
      {
        name: "X & Y",
        slug: "x-y",
        description: "",
      },
      {
        name: "Black 2 & White 2",
        slug: "black-2-white-2",
        description: "",
      },
      {
        name: "Black & White",
        slug: "black-white",
        description: "",
      },
      {
        name: "HeartGold & SoulSilver",
        slug: "heartgold-soulsilver",
        description: "",
      },
      {
        name: "Platinum",
        slug: "platinum",
        description: "",
      },
      {
        name: "Diamond & Pearl",
        slug: "diamond-pearl",
        description: "",
      },
      {
        name: "FireRed & LeafGreen",
        slug: "firered-leafgreen",
        description: "",
      },
      {
        name: "Emerald",
        slug: "emerald",
        description: "",
      },
      {
        name: "Ruby & Sapphire",
        slug: "ruby-sapphire",
        description: "",
      },
      {
        name: "Crystal",
        slug: "crystal",
        description: "",
      },
      {
        name: "Gold & Silver",
        slug: "gold-silver",
        description: "",
      },
      {
        name: "Yellow",
        slug: "yellow",
        description: "",
      },
      {
        name: "Red & Blue",
        slug: "red-blue",
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
