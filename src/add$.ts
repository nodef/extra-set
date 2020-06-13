/**
 * Adds value to set.
 * @param x a set (updated)
 * @param v value
 * @returns x
 */
function add$<T>(x: Set<T>, v: T): Set<T> {
  return x.add(v);
}
export default add$;
