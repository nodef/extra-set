/**
 * Removes first n values.
 * @param x a set
 * @param n number of values (1)
 */
function drop<T>(x: Iterable<T>, n: number=1): Set<T> {
  var i = 0, a = new Set<T>();
  for(var v of x)
    if(i++>=n) a.add(v);
  return a;
}
export default drop;
