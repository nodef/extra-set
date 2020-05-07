import union$ from './union$';

/**
 * Gives values present in any set.
 * @param xs sets
 */
function union<T>(...xs: Iterable<T>[]): Set<T> {
  return union$(new Set<T>(), ...xs);
}
export default union;
