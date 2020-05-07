import shift from './shift';

/**
 * Lists all subsets of a set.
 * @param x a set
 * @param n number of values (-1 => any)
 */
function* subsets<T>(x: Set<T>, n: number=-1): IterableIterator<Set<T>> {
  var X = x.size;
  if(n>=X) { if(n==X) yield x; return; }
  if(n===0 || X===0) { yield new Set(); return; }
  var [a, y] = shift(x);
  yield* subsets(y, n);
  for(var s of subsets(y, n-1)) {
    s.add(a);
    yield s;
  }
}  
export default subsets;
