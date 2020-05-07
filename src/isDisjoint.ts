/**
 * Checks if sets no have value in common.
 * @param xs sets
 */
function isDisjoint<T>(...xs: Iterable<T>[]): boolean {
  var a = new Set<T>();
  for(var x of xs) {
    for(var v of x) {
      if(a.has(v)) return false;
      a.add(v);
    }
  }
  return true;
}
export default isDisjoint;
