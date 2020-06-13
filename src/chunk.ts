import filterAt from './filterAt';

/**
 * Breaks set into chunks of given size.
 * @param x a set
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T>(x: Set<T>, n: number=1, s: number=n): Set<T>[] {
  var vs = [...x], a = [];
  for(var i=0, I=vs.length; i<I; i+=s)
    a.push(new Set(vs.slice(i, i+n)));
  return a;
}
export default chunk;
