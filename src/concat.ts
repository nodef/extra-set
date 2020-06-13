import concat$ from './concat$';

/**
 * Combines values from sets.
 * @param xs sets
 */
function concat<T>(...xs: Iterable<T>[]): Set<T> {
  return concat$(new Set(), ...xs);
}
export default concat;
