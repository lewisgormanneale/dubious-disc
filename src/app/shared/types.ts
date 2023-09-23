// export enum TypeColors {
//   bug = '#A8B820',
//   dark = '#705848',
//   dragon = '#7038F8',
//   electric = '#F8D030',
//   fairy = '#EE99AC',
//   fighting = '#C03028',
//   fire = '#F08030',
//   flying = '#A890F0',
//   ghost = '#705898',
//   grass = '#78C850',
//   ground = '#E0C068',
//   ice = '#98D8D8',
//   normal = '#A8A878',
//   poison = '#A040A0',
//   psychic = '#F85888',
//   rock = '#B8A038',
//   steel = '#B8B8D0',
//   water = '#6890F0',
// }

interface PokemonTypeValues {
  name: string;
  type_color: string;
  darker_type_color: string;
}

export const AllPokemonTypeValues: any = {
  0: {
    name: 'Unknown',
    type_color: '#AAAA99',
    darker_type_color: '#848471',
  },
  1: {
    name: 'Normal',
    type_color: '#AAAA99',
    darker_type_color: '#848471',
  },
  2: {
    name: 'Fighting',
    type_color: '#BB5544',
    darker_type_color: '#903a2b',
  },
  3: {
    name: 'Flying',
    type_color: '#8899FF',
    darker_type_color: '#475ee8',
  },
  4: {
    name: 'Poison',
    type_color: '#AA5599',
    darker_type_color: '#822b74',
  },
  5: {
    name: 'Ground',
    type_color: '#DDBB55',
    darker_type_color: '#b69532',
  },
  6: {
    name: 'Rock',
    type_color: '#BBAA66',
    darker_type_color: '#958453',
  },
  7: { name: 'Bug', type_color: '#AABB22', darker_type_color: '#82900e' },
  8: {
    name: 'Ghost',
    type_color: '#6666BB',
    darker_type_color: '#484890',
  },
  9: {
    name: 'Steel',
    type_color: '#AAAABB',
    darker_type_color: '#7f7f94',
  },
  10: {
    name: 'Fire',
    type_color: '#FF4422',
    darker_type_color: '#ca2b0e',
  },
  11: {
    name: 'Water',
    type_color: '#3399FF',
    darker_type_color: '#1174d7',
  },
  12: {
    name: 'Grass',
    type_color: '#77CC55',
    darker_type_color: '#579F3A',
  },
  13: {
    name: 'Electric',
    type_color: '#FFCC33',
    darker_type_color: '#d7a511',
  },
  14: {
    name: 'Psychic',
    type_color: '#FF5599',
    darker_type_color: '#ea1a6d',
  },
  15: { name: 'Ice', type_color: '#66CCFF', darker_type_color: '#29a9ea' },
  16: {
    name: 'Dragon',
    type_color: '#8C7DF1',
    darker_type_color: '#5643d7',
  },
  17: {
    name: 'Dark',
    type_color: '#775544',
    darker_type_color: '#573a2b',
  },
  18: {
    name: 'Fairy',
    type_color: '#EE99EE',
    darker_type_color: '#d15ed1',
  },
  10001: {
    name: 'Unknown',
    type_color: 'grey',
    darker_type_color: 'darkgrey',
  },
  10002: {
    name: 'Shadow',
    type_color: 'black',
    darker_type_color: 'black',
  },
};
