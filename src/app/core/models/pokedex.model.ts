import { PokemonEntry } from './pokemon.model';

export interface Pokedex {
  descriptions: Array<any>;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Array<any>;
  pokemon_entries: PokemonEntry[];
  region: any;
  version_groups: Array<any>;
}

export interface PokedexVersion {
  key: number;
  name: string;
  slug: string;
  pokedexID: number;
}

export const PokedexVersions: PokedexVersion[] = [
  { key: 1, name: 'National', slug: 'national', pokedexID: 1 },
  { key: 2, name: 'Red/Blue/Yellow', slug: 'red-blue-yellow', pokedexID: 2 },
  { key: 4, name: 'Gold/Silver', slug: 'gold-silver-crystal', pokedexID: 3 },
  {
    key: 4,
    name: 'Ruby/Sapphire/Emerald',
    slug: 'ruby-sapphire-emerald',
    pokedexID: 4,
  },
  {
    key: 5,
    name: 'FireRed/LeafGreen',
    slug: 'firered-leafgreen',
    pokedexID: 2,
  },
  { key: 5, name: 'Diamond/Pearl', slug: 'diamond-pearl', pokedexID: 5 },
  { key: 6, name: 'Platinum', slug: 'platinum', pokedexID: 6 },
  {
    key: 7,
    name: 'HeartGold/SoulSilver',
    slug: 'heartgold-soulsilver',
    pokedexID: 7,
  },
  { key: 8, name: 'Black/White', slug: 'black-white', pokedexID: 8 },
  { key: 9, name: 'Black 2/White 2', slug: 'black2-white2', pokedexID: 9 },
  { key: 12, name: 'X/Y (Central)', slug: 'xy-central', pokedexID: 12 },
  { key: 13, name: 'X/Y (Coastal)', slug: 'xy-coastal', pokedexID: 13 },
  { key: 14, name: 'X/Y (Mountain)', slug: 'xy-mountain', pokedexID: 14 },
  {
    key: 15,
    name: 'Omega Ruby/Alpha Sapphire',
    slug: 'omega-ruby-alpha-sapphire',
    pokedexID: 15,
  },
  { key: 16, name: 'Sun/Moon', slug: 'sun-moon', pokedexID: 16 },
  {
    key: 21,
    name: 'Ultra Sun/Ultra Moon',
    slug: 'ultra-sun-ultra-moon',
    pokedexID: 21,
  },
  {
    key: 26,
    name: "Let's Go Pikachu/Let's Go Eevee",
    slug: 'lets-go-pikachu-lets-go-eevee',
    pokedexID: 26,
  },
  { key: 27, name: 'Sword/Shield (Base)', slug: 'sword-shield', pokedexID: 27 },
  {
    key: 28,
    name: 'Sword/Shield (Isle of Armor)',
    slug: 'sword-shield-isle-of-armor',
    pokedexID: 28,
  },
  {
    key: 29,
    name: 'Sword/Shield (Crown Tundra)',
    slug: 'sword-shield-crown-tundra',
    pokedexID: 29,
  },
  {
    key: 5,
    name: 'Brilliant Diamond/Shining Pearl',
    slug: 'brilliant-diamond-shining-pearl',
    pokedexID: 5,
  },
  { key: 30, name: 'Legends: Arceus', slug: 'legends-arceus', pokedexID: 30 },
  { key: 31, name: 'Scarlet/Violet', slug: 'scarlet-violet', pokedexID: 31 },
];
