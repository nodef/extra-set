import type {testFn} from './_types';

/**
 * Discards values which pass a test.
 * @param x a set
 * @param fn test function (v, v, x)
 */
function reject<T>(x: Iterable<T>, fn: testFn<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(!fn(v, v, x)) a.add(v);
  return a;
}
export default reject;
