/**
 * Gets set with given values.
 * @param x a set (updated)
 * @param vs values
 * @returns x
 */
function filterAt$<T>(x: Set<T>, vs: T[]): Set<T> {
  for(var v of x)
    if(!vs.includes(v)) x.delete(v);
  return x;
}
export default filterAt$;
