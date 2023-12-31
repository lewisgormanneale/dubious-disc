export interface NavigationItem {
  label: string;
  sections: SectionItem[];
}

export interface SectionItem {
  sectionTitle: string;
  options: SectionOption[];
}

export interface SectionOption {
  label: string;
  link: string;
}

export const headerNavItems: NavigationItem[] = [
  {
    label: 'Resources',
    sections: [
      {
        sectionTitle: 'Databases',
        options: [
          {
            label: 'Pokédex',
            link: 'pokedex',
          },
        ],
      },
      {
        sectionTitle: 'Tools',
        options: [
          {
            label: 'Team Builder',
            link: 'team-builder',
          },
        ],
      },
    ],
  },
  // {
  //   label: 'Games',
  //   sections: [
  //     {
  //       sectionTitle: 'Generation IX',
  //       options: [
  //         {
  //           label: 'Pokémon Scarlet & Violet',
  //           link: 'games/scarlet-violet',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation VIII',
  //       options: [
  //         {
  //           label: 'Pokémon Sword & Shield',
  //           link: 'games/sword-shield',
  //         },
  //         {
  //           label: 'Pokémon Brilliant Diamond & Shining Pearl',
  //           link: 'games/brilliant-diamond-shining-pearl',
  //         },
  //         {
  //           label: 'Pokémon Legends Arceus',
  //           link: 'games/legends-arceus',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation VII',
  //       options: [
  //         {
  //           label: 'Pokémon Sun & Moon',
  //           link: 'games/sun-moon',
  //         },
  //         {
  //           label: 'Pokémon Ultra Sun & Ultra Moon',
  //           link: 'games/ultra-sun-ultra-moon',
  //         },
  //         {
  //           label: "Pokémon Let's Go Pikachu & Eevee",
  //           link: 'games/lets-go-pikachu-lets-go-eevee',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation VI',
  //       options: [
  //         {
  //           label: 'Pokémon X & Y',
  //           link: 'games/x-y',
  //         },
  //         {
  //           label: 'Pokémon Omega Ruby & Alpha Sapphire',
  //           link: 'games/omega-ruby-alpha-sapphire',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation V',
  //       options: [
  //         {
  //           label: 'Pokémon Black & White',
  //           link: 'games/black-white',
  //         },
  //         {
  //           label: 'Pokémon Black 2 & White 2',
  //           link: 'games/black-2-white-2',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation IV',
  //       options: [
  //         {
  //           label: 'Pokémon Diamond & Pearl',
  //           link: 'games/diamond-pearl',
  //         },
  //         {
  //           label: 'Pokémon Platinum',
  //           link: 'games/platinum',
  //         },
  //         {
  //           label: 'Pokémon HeartGold & SoulSilver',
  //           link: 'games/heartgold-soulsilver',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation III',
  //       options: [
  //         {
  //           label: 'Pokémon Ruby & Sapphire',
  //           link: 'games/ruby-sapphire',
  //         },
  //         {
  //           label: 'Pokémon FireRed & LeafGreen',
  //           link: 'games/firered-leafgreen',
  //         },
  //         {
  //           label: 'Pokémon Emerald',
  //           link: 'games/emerald',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation II',
  //       options: [
  //         {
  //           label: 'Pokémon Gold & Silver',
  //           link: 'games/gold-silver',
  //         },
  //         {
  //           label: 'Pokémon Crystal',
  //           link: 'games/crystal',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Generation I',
  //       options: [
  //         {
  //           label: 'Pokémon Red & Blue',
  //           link: 'games/red-blue',
  //         },
  //         {
  //           label: 'Pokémon Yellow',
  //           link: 'games/yellow',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: 'Videos',
  //   sections: [
  //     {
  //       sectionTitle: 'Watch Online',
  //       options: [
  //         {
  //           label: 'Video Hub',
  //           link: '/videos',
  //         },
  //       ],
  //     },
  //     {
  //       sectionTitle: 'Series',
  //       options: [
  //         {
  //           label: 'Paldean Winds',
  //           link: 'videos/paldean-winds',
  //         },
  //         {
  //           label: 'Twilight Wings',
  //           link: 'videos/twilight-wings',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: 'Other',
  //   sections: [
  //     {
  //       sectionTitle: 'Community',
  //       options: [
  //         {
  //           label: 'About/Contact Us',
  //           link: 'about',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
