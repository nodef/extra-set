import tosets from './_tosets';

/**
 * Gives values present in all sets.
 * @param x a set (updated)
 * @param ys other sets
 * @returns x
 */
function intersection$<T>(x: Set<T>, ...ys: Iterable<T>[]): Set<T> {
  var ys1 = tosets(ys);
  x: for(var v of x) {
    for(var y of ys1)
      if(!y.has(v)) { x.delete(v); continue x; }
  }
  return x;
}
export default intersection$;
