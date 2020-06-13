/**
 * Gets set without given values.
 * @param x a set (updated)
 * @param vs values
 * @returns x
 */
function rejectAt$<T>(x: Set<T>, vs: T[]): Set<T> {
  for(var v of vs)
    x.delete(v);
  return x;
}
export default rejectAt$;
