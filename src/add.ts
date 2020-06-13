/**
 * Adds value to set.
 * @param x a set
 * @param v value
 */
function add<T>(x: Iterable<T>, v: T): Set<T> {
  return new Set(x).add(v);
}
export default add;
