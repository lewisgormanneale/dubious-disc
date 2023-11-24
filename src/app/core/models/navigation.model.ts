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
          {
            label: 'Team Builder',
            link: '/',
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
  {
    label: 'Videos',
    sections: [],
  },
  {
    label: 'Other',
    sections: [
      {
        sectionTitle: 'Community',
        options: [
          {
            label: 'About/Contact Us',
            link: '/about',
          },
        ],
      },
    ],
  },
];
