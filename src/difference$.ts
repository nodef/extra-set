/**
 * Gives values of a set not present in others.
 * @param x a set (updated)
 * @param ys other sets
 */
function difference$<T>(x: Set<T>, ...ys: Iterable<T>[]): Set<T> {
  for(var y of ys) {
    for(var v of y)
      x.delete(v);
  }
  return x;
}
export default difference$;
