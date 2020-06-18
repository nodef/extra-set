/**
 * Gives values present in both sets.
 * @param x a set
 * @param y another set
 */
function intersection<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  var a = new Set<T>();
  for(var v of y)
    if(x.has(v)) a.add(v);
  return a;
}
export default intersection;
