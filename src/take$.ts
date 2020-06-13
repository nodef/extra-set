/**
 * Keeps first n values only.
 * @param x a set (updated)
 * @param n number of values (1)
 * @returns x
 */
function take$<T>(x: Set<T>, n: number=1): Set<T> {
  var i = 0;
  for(var v of x)
    if(i++>=n) x.delete(v);
  return x;
}
export default take$;
