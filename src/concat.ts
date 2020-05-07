import concat$ from './concat$';

/**
 * Appends sets together.
 * @param xs sets to append
 */
function concat<T>(...xs: Iterable<T>[]): Set<T> {
  return concat$(new Set<T>(), ...xs);
}
export default concat;
