import concat$ from './concat$';

/**
 * Appends values from sets.
 * @param xs sets
 */
function concat<T>(...xs: Iterable<T>[]): Set<T> {
  return concat$(new Set(), ...xs);
}
export default concat;
