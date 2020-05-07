/**
 * Removes first value.
 * @param x a set (updated)
 * @returns value
 */
function shift$<T>(x: Set<T>): T {
  for(var v of x) {
    x.delete(v);
    return v;
  }
}
export default shift$;
