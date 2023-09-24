// export interface GameVersionGroup {
//   key: number;
//   name: string;
//   slug: string;
//   pokedexID: number;
// }

export function getFormattedVersionGroupName(versionGroup: string): string {
  const FormattedVersionGroupNames: { [key: string]: string } = {
    'red-blue': 'Red/Blue',
    yellow: 'Yellow',
    'gold-silver': 'Gold/Silver',
    crystal: 'Crystal',
    'ruby-sapphire': 'Ruby/Sapphire',
    emerald: 'Emerald',
    'firered-leafgreen': 'FireRed/LeafGreen',
    colosseum: 'Colosseum',
    xd: 'XD',
    'diamond-pearl': 'Diamond/Pearl',
    platinum: 'Platinum',
    'heartgold-soulsilver': 'HeartGold/SoulSilver',
    'black-white': 'Black/White',
    'black-2-white-2': 'Black 2/White 2',
    'x-y': 'X/Y',
    'omega-ruby-alpha-sapphire': 'Omega Ruby/Alpha Sapphire',
    'sun-moon': 'Sun/Moon',
    'ultra-sun-ultra-moon': 'Ultra Sun/Ultra Moon',
    'lets-go-pikachu-lets-go-eevee': "Let's Go Pikachu/Let's Go Eevee",
    'sword-shield': 'Sword/Shield (Base)',
    'the-isle-of-armor': 'Sword/Shield (Isle of Armor)',
    'the-crown-tundra': 'Sword/Shield (Crown Tundra)',
    'brilliant-diamond-and-shining-pearl': 'Brilliant Diamond/Shining Pearl',
    'legends-arceus': 'Legends: Arceus',
    'scarlet-violet': 'Scarlet/Violet',
    'the-teal-mask': 'The Teal Mask',
    'the-indigo-disk': 'The Indigo Disk',
  };
  return FormattedVersionGroupNames[versionGroup];
}

// export const GameVersionGroups: GameVersionGroup[] = [
//   // { key: 1, name: 'National', slug: 'national', pokedexID: 1 },
//   { key: 2, name: 'Red/Blue', slug: 'red-blue', pokedexID: 2 },
//   { key: 3, name: 'Yellow', slug: 'yellow', pokedexID: 2 },
//   { key: 4, name: 'Gold/Silver', slug: 'gold-silver', pokedexID: 3 },
//   { key: 5, name: 'Crystal', slug: 'crystal', pokedexID: 3 },
//   // { key: 31, name: 'Scarlet/Violet', slug: 'sv' },
//   // { key: 30, name: 'Legends: Arceus', slug: 'la' },
//   // { key: 5, name: 'Brilliant Diamond/Shining Pearl', slug: 'bdsp' },
//   // { key: 29, name: 'Sword/Shield (Crown Tundra)', slug: 'swsh-ct' },
//   // { key: 28, name: 'Sword/Shield (Isle of Armor)', slug: 'swsh-ia' },
//   // { key: 27, name: 'Sword/Shield (Base)', slug: 'swsh' },
//   // { key: 26, name: "Let's Go Pikachu/Eevee", slug: 'lgpe' },
//   // { key: 21, name: 'Ultra Sun/Ultra Moon', slug: 'usum' },
//   // { key: 16, name: 'Sun/Moon', slug: 'sm' },
//   // { key: 15, name: 'Omega Ruby/Alpha Sapphire', slug: 'oras' },
//   // { key: 14, name: 'X/Y (Mountain)', slug: 'xy-mountain' },
//   // { key: 13, name: 'X/Y (Coastal)', slug: 'xy-coastal' },
//   // { key: 12, name: 'X/Y (Central)', slug: 'xy-central' },
//   // { key: 9, name: 'Black 2/White 2', slug: 'b2w2' },
//   // { key: 8, name: 'Black/White', slug: 'bw' },
//   // { key: 7, name: 'HeartGold/SoulSilver', slug: 'hgss' },
//   // { key: 6, name: 'Platinum', slug: 'pt' },
//   // { key: 5, name: 'Diamond/Pearl', slug: 'dp' },
//   // { key: 2, name: 'FireRed/LeafGreen', slug: 'frlg' },
//   // { key: 4, name: 'Ruby/Sapphire/Emerald', slug: 'rse' },
// ];

// export interface GameVersion {
//   key: number;
//   name: string;
//   slug: string;
//   pokedexID: number;
// }

// export const GameVersions: GameVersion[] = [
//   // { key: 1, name: 'National', slug: 'national', pokedexID: 1 },
//   { key: 2, name: 'Red', slug: 'red', pokedexID: 2 },
//   { key: 3, name: 'Blue', slug: 'blue', pokedexID: 2 },
//   // { key: 4, name: 'Gold/Silver', slug: 'gold-silver', pokedexID: 3 },
//   // { key: 5, name: 'Crystal', slug: 'crystal', pokedexID: 3 },
//   // { key: 31, name: 'Scarlet/Violet', slug: 'sv' },
//   // { key: 30, name: 'Legends: Arceus', slug: 'la' },
//   // { key: 5, name: 'Brilliant Diamond/Shining Pearl', slug: 'bdsp' },
//   // { key: 29, name: 'Sword/Shield (Crown Tundra)', slug: 'swsh-ct' },
//   // { key: 28, name: 'Sword/Shield (Isle of Armor)', slug: 'swsh-ia' },
//   // { key: 27, name: 'Sword/Shield (Base)', slug: 'swsh' },
//   // { key: 26, name: "Let's Go Pikachu/Eevee", slug: 'lgpe' },
//   // { key: 21, name: 'Ultra Sun/Ultra Moon', slug: 'usum' },
//   // { key: 16, name: 'Sun/Moon', slug: 'sm' },
//   // { key: 15, name: 'Omega Ruby/Alpha Sapphire', slug: 'oras' },
//   // { key: 14, name: 'X/Y (Mountain)', slug: 'xy-mountain' },
//   // { key: 13, name: 'X/Y (Coastal)', slug: 'xy-coastal' },
//   // { key: 12, name: 'X/Y (Central)', slug: 'xy-central' },
//   // { key: 9, name: 'Black 2/White 2', slug: 'b2w2' },
//   // { key: 8, name: 'Black/White', slug: 'bw' },
//   // { key: 7, name: 'HeartGold/SoulSilver', slug: 'hgss' },
//   // { key: 6, name: 'Platinum', slug: 'pt' },
//   // { key: 5, name: 'Diamond/Pearl', slug: 'dp' },
//   // { key: 2, name: 'FireRed/LeafGreen', slug: 'frlg' },
//   // { key: 4, name: 'Ruby/Sapphire/Emerald', slug: 'rse' },
// // ];

// interface GameVersionGroup {
//   name: string;
// }

// export const AllGameVersionGroups: any = {
//   0: {
//     name: 'Unknown',
//     type_color: '#AAAA99',
//     darker_type_color: '#848471',
//   },
//   1: {
//     name: 'Normal',
//     type_color: '#AAAA99',
//     darker_type_color: '#848471',
//   },
//   2: {
//     name: 'Fighting',
//     type_color: '#BB5544',
//     darker_type_color: '#903a2b',
//   },
//   3: {
//     name: 'Flying',
//     type_color: '#8899FF',
//     darker_type_color: '#475ee8',
//   },
//   4: {
//     name: 'Poison',
//     type_color: '#AA5599',
//     darker_type_color: '#822b74',
//   },
//   5: {
//     name: 'Ground',
//     type_color: '#DDBB55',
//     darker_type_color: '#b69532',
//   },
//   6: {
//     name: 'Rock',
//     type_color: '#BBAA66',
//     darker_type_color: '#958453',
//   },
//   7: { name: 'Bug', type_color: '#AABB22', darker_type_color: '#82900e' },
//   8: {
//     name: 'Ghost',
//     type_color: '#6666BB',
//     darker_type_color: '#484890',
//   },
//   9: {
//     name: 'Steel',
//     type_color: '#AAAABB',
//     darker_type_color: '#7f7f94',
//   },
//   10: {
//     name: 'Fire',
//     type_color: '#FF4422',
//     darker_type_color: '#ca2b0e',
//   },
//   11: {
//     name: 'Water',
//     type_color: '#3399FF',
//     darker_type_color: '#1174d7',
//   },
//   12: {
//     name: 'Grass',
//     type_color: '#77CC55',
//     darker_type_color: '#579F3A',
//   },
//   13: {
//     name: 'Electric',
//     type_color: '#FFCC33',
//     darker_type_color: '#d7a511',
//   },
//   14: {
//     name: 'Psychic',
//     type_color: '#FF5599',
//     darker_type_color: '#ea1a6d',
//   },
//   15: { name: 'Ice', type_color: '#66CCFF', darker_type_color: '#29a9ea' },
//   16: {
//     name: 'Dragon',
//     type_color: '#8C7DF1',
//     darker_type_color: '#5643d7',
//   },
//   17: {
//     name: 'Dark',
//     type_color: '#775544',
//     darker_type_color: '#573a2b',
//   },
//   18: {
//     name: 'Fairy',
//     type_color: '#EE99EE',
//     darker_type_color: '#d15ed1',
//   },
//   10001: {
//     name: 'Unknown',
//     type_color: 'grey',
//     darker_type_color: 'darkgrey',
//   },
//   10002: {
//     name: 'Shadow',
//     type_color: 'black',
//     darker_type_color: 'black',
//   },
// };
