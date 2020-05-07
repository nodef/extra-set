import intersection$ from './intersection$';

/**
 * Gives values present in all sets.
 * @param xs sets
 */
function intersection<T>(...xs: Iterable<T>[]): Set<T> {
  var x = new Set<T>(xs.shift() || []);
  return intersection$(x, ...xs);
}
export default intersection;
