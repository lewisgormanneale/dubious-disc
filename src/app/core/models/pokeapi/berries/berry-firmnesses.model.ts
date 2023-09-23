import { Name, NamedAPIResource } from '../utility';

/**
 * ## Berry Firmness
 * Berries can be soft, very soft, hard, super hard or very hard.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail
 */
export interface BerryFirmness {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: 'very-soft' | 'soft' | 'hard' | 'very-hard' | 'super-hard';
  /** A list of the berries with this firmness */
  berries: NamedAPIResource[];
  /** The name of this resource listed in different languages */
  names: Name[];
}
