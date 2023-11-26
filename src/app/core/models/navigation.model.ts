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
            link: '/pokedex',
          },
        ],
      },
      {
        sectionTitle: 'Tools',
        options: [
          {
            label: 'Team Builder',
            link: '/',
          },
        ],
      },
    ],
  },
  {
    label: 'Games',
    sections: [
      {
        sectionTitle: 'Generation IX',
        options: [
          {
            label: 'Pokémon Scarlet & Violet',
            link: '/scarlet-violet',
          },
        ],
      },
      {
        sectionTitle: 'Generation VIII',
        options: [
          {
            label: 'Pokémon Sword & Shield',
            link: '/sword-shield',
          },
          {
            label: 'Pokémon Brilliant Diamond & Shining Pearl',
            link: '/brilliant-diamond-shining-pearl',
          },
          {
            label: 'Pokémon Legends Arceus',
            link: '/legends-arceus',
          },
        ],
      },
      {
        sectionTitle: 'Generation VII',
        options: [
          {
            label: 'Pokémon Sun & Moon',
            link: '/sun-moon',
          },
          {
            label: 'Pokémon Ultra Sun & Ultra Moon',
            link: '/ultra-sun-ultra-moon',
          },
          {
            label: "Pokémon Let's Go Pikachu & Eevee",
            link: '/lets-go',
          },
        ],
      },
      {
        sectionTitle: 'Generation VI',
        options: [
          {
            label: 'Pokémon X & Y',
            link: '/x-y',
          },
          {
            label: 'Pokémon Omega Ruby & Alpha Sapphire',
            link: '/omega-ruby-alpha-sapphire',
          },
        ],
      },
      {
        sectionTitle: 'Generation V',
        options: [
          {
            label: 'Pokémon Black & White',
            link: '/black-white',
          },
          {
            label: 'Pokémon Black 2 & White 2',
            link: '/black-2-white-2',
          },
        ],
      },
      {
        sectionTitle: 'Generation IV',
        options: [
          {
            label: 'Pokémon Diamond & Pearl',
            link: '/diamond-pearl',
          },
          {
            label: 'Pokémon Platinum',
            link: '/platinum',
          },
          {
            label: 'Pokémon HeartGold & SoulSilver',
            link: '/heartgold-soulsilver',
          },
        ],
      },
      {
        sectionTitle: 'Generation III',
        options: [
          {
            label: 'Pokémon Ruby & Sapphire',
            link: '/ruby-sapphire',
          },
          {
            label: 'Pokémon FireRed & LeafGreen',
            link: '/firered-leafgreen',
          },
          {
            label: 'Pokémon Emerald',
            link: '/emerald',
          },
        ],
      },
      {
        sectionTitle: 'Generation II',
        options: [
          {
            label: 'Pokémon Gold & Silver',
            link: '/gold-silver',
          },
          {
            label: 'Pokémon Crystal',
            link: '/crystal',
          },
        ],
      },
      {
        sectionTitle: 'Generation I',
        options: [
          {
            label: 'Pokémon Red & Blue',
            link: '/red-blue',
          },
          {
            label: 'Pokémon Yellow',
            link: '/yellow',
          },
        ],
      },
    ],
  },
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
  //           link: '/paldean-winds',
  //         },
  //         {
  //           label: 'Twilight Wings',
  //           link: '/twilight-wings',
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
  //           link: '/about',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
