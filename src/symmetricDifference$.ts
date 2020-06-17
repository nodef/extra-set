/**
 * Gives values not present in both sets.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
function symmetricDifference$<T>(x: Set<T>, y: Set<T>): Set<T> {
  for(var v of y) {
    if(x.has(v)) x.delete(v);
    else x.add(v);
  }
  return x;
}
export default symmetricDifference$;
