/**
 * Gives values present in both sets.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
function intersection$<T>(x: Set<T>, y: Set<T>): Set<T> {
  for(var v of x)
    if(!y.has(v)) x.delete(v);
  return x;
}
export default intersection$;
