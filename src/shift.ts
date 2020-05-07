import shift$ from './shift$';

/**
 * Removes first value.
 * @param x a set
 * @returns [value, set]
 */
function shift<T>(x: Iterable<T>): [T, Set<T>] {
  var x1 = new Set<T>(x);
  return [shift$(x1), x1];
}
export default shift;
