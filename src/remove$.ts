/**
 * Deletes a value.
 * @param x a set (updated)
 * @param v value
 * @returns x
 */
function remove$<T>(x: Set<T>, v: T): Set<T> {
  x.delete(v);
  return x;
}
export default remove$;
