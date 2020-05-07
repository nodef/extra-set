/**
 * Breaks set into chunks of given size.
 * @param x a set
 * @param n chunk size (1)
 */
function chunk<T>(x: Iterable<T>, n: number=1): Set<T>[] {
  var a = [], m = n;
  var b = new Set<T>();
  for(var v of x) {
    b.add(v);
    if(--m>0) continue;
    a.push(b);
    b = new Set<T>();
    m = n;
  }
  if(b.size) a.push(b);
  return a;
}
export default chunk;
