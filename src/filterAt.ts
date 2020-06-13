/**
 * Gets set with given values.
 * @param x a set
 * @param vs values
 */
function filterAt<T>(x: Set<T>, vs: T[]): Set<T> {
  var a = new Set<T>();
  for(var v of vs)
    if(x.has(v)) a.add(v);
  return a;
}
export default filterAt;
