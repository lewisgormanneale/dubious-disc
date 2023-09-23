import { Name, NamedAPIResource } from '../utility';

/**
 * ## Berry Flavor
 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 */
export interface BerryFlavor {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: 'spicy' | 'dry' | 'sweet' | 'bitter' | 'sour';
  /** A list of the berries with this flavor */
  berries: FlavorBerryMap[];
  /** The contest type that correlates with this berry flavor */
  contest_type: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
}

/**
 * Berry with the given flavor
 */
export interface FlavorBerryMap {
  /** How powerful the referenced flavor is for this berry */
  potency: number;
  /** The berry with the referenced flavor */
  berry: NamedAPIResource;
}
