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

export const pokedexVersions: { key: number; value: string }[] = [
  { key: 1, value: 'National' },
  { key: 31, value: 'Scarlet/Violet' },
  { key: 30, value: 'Legends: Arceus' },
  { key: 29, value: 'Sword/Shield (Crown Tundra)' },
  { key: 28, value: 'Sword/Shield (Isle of Armor)' },
  { key: 27, value: 'Sword/Shield (Base)' },
  { key: 26, value: "Let's Go Pikachu/Eevee" },
  { key: 21, value: 'Ultra Sun/Ultra Moon' },
  { key: 16, value: 'Sun/Moon' },
  { key: 15, value: 'Omega Ruby/Alpha Sapphire' },
  { key: 14, value: 'X/Y (Mountain)' },
  { key: 13, value: 'X/Y (Coastal)' },
  { key: 12, value: 'X/Y (Central)' },
  { key: 9, value: 'Black 2/White 2' },
  { key: 8, value: 'Black/White' },
  { key: 7, value: 'HeartGold/SoulSilver' },
  { key: 6, value: 'Platinum' },
  { key: 5, value: 'Diamond/Pearl' },
  { key: 4, value: 'Ruby/Sapphire/Emerald' },
  { key: 3, value: 'Gold/Silver/Crystal' },
  { key: 2, value: 'Red/Blue/Yellow' },
];
