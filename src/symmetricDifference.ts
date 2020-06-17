/**
 * Gives values not present in both sets.
 * @param x a set
 * @param y another set
 */
function symmetricDifference<T>(x: Set<T>, y: Set<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(!y.has(v)) a.add(v);
  for(var v of y)
    if(!x.has(v)) a.add(v);
  return a;
}
export default symmetricDifference;
