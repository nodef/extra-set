import tosets from './_tosets';

/**
 * Checks if all sets are part of a set.
 * @param x a set
 * @param y other sets
 */
function isSuperset<T>(x: Set<T>, ...ys: Iterable<T>[]): boolean {
  var ys1 = tosets(ys);
  for(var y of ys1) {
    for(var v of y)
      if(!x.has(v)) return false;
  }
  return true;
}
export default isSuperset;
