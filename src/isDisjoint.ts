/**
 * Checks if sets have no common values.
 * @param x a set
 * @param y another set
 */
function isDisjoint<T>(x: Set<T>, y: Iterable<T>): boolean {
  for(var v of y)
    if(x.has(v)) return false;
  return true;
}
export default isDisjoint;
