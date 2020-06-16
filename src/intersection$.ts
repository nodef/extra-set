/**
 * Gives values present in all sets.
 * @param x a set (updated)
 * @param ys other sets
 * @returns x
 */
function intersection$<T>(x: Set<T>, ys: Set<T>): Set<T> {
  x: for(var v of x) {
    for(var y of ys)
      if(!y.has(v)) { x.delete(v); continue x; }
  }
    if(!y.has(v)) x.delete(v);
  return x;
}
export default intersection$;
