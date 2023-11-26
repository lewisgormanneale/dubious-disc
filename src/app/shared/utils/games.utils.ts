// export interface GameVersionGroup {
//   key: number;
//   name: string;
//   slug: string;
//   pokedexID: number;
// }

export function getFormattedVersionGroupName(versionGroup: string): string {
  const FormattedVersionGroupNames: { [key: string]: string } = {
    'red-blue': 'Red / Blue',
    yellow: 'Yellow',
    'gold-silver': 'Gold / Silver',
    crystal: 'Crystal',
    'ruby-sapphire': 'Ruby / Sapphire',
    emerald: 'Emerald',
    'firered-leafgreen': 'FireRed / LeafGreen',
    colosseum: 'Colosseum',
    xd: 'XD',
    'diamond-pearl': 'Diamond / Pearl',
    platinum: 'Platinum',
    'heartgold-soulsilver': 'HeartGold / SoulSilver',
    'black-white': 'Black / White',
    'black-2-white-2': 'Black 2 / White 2',
    'x-y': 'X / Y',
    'omega-ruby-alpha-sapphire': 'Omega Ruby / Alpha Sapphire',
    'sun-moon': 'Sun / Moon',
    'ultra-sun-ultra-moon': 'Ultra Sun / Ultra Moon',
    'lets-go-pikachu-lets-go-eevee': "Let's Go Pikachu / Let's Go Eevee",
    'sword-shield': 'Sword / Shield',
    'the-isle-of-armor': 'Sword / Shield (Isle of Armor)',
    'the-crown-tundra': 'Sword / Shield (Crown Tundra)',
    'brilliant-diamond-and-shining-pearl': 'Brilliant Diamond / Shining Pearl',
    'legends-arceus': 'Legends: Arceus',
    'scarlet-violet': 'Scarlet / Violet',
    'the-teal-mask': 'The Teal Mask',
    'the-indigo-disk': 'The Indigo Disk',
  };
  return FormattedVersionGroupNames[versionGroup];
}
