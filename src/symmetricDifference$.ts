/**
 * Gives values present in odd number of sets.
 * @param x a set (updated)
 * @param ys other sets
 * @returns x
 */
function symmetricDifference$<T>(x: Set<T>, ...ys: Iterable<T>[]): Set<T> {
  for(var y of ys) {
    for(var v of y) {
      if(x.has(v)) x.delete(v);
      else x.add(v);
    }
  }
  return x;
}
export default symmetricDifference$;
