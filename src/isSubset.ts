import tosets from './_tosets';

/**
 * Checks if set is part of all sets.
 * @param x a set
 * @param y other sets
 */
function isSubset<T>(x: Set<T>, ...ys: Iterable<T>[]): boolean {
  var ys1 = tosets(ys);
  for(var y of ys1) {
    for(var v of x)
      if(!y.has(v)) return false;
  }
  return true;
}
export default isSubset;
