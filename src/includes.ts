/**
 * Checks if set has a value.
 * @param x a set
 * @param v value?
 */
function includes<T>(x: Iterable<T>, v: T): boolean {
  return new Set<T>(x).has(v);
}
export default includes;
