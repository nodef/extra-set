/**
 * Appends sets to the end.
 * @param x a set (updated)
 * @param ys sets to append
 * @returns x
 */
function concat$<T>(x: Set<T>, ...ys: Iterable<T>[]): Set<T> {
  for(var y of ys) {
    for(var v of y)
      x.add(v);
  }
  return x;
}
export default concat$;
