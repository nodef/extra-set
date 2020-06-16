import type {testFn} from './_types';

/**
 * Finds first value not passing a test.
 * @param x a set
 * @param fn test function (v, v, x)
 */
function scanWhile<T>(x: Iterable<T>, fn: testFn<T>): T {
  for(var v of x)
    if(!fn(v, v, x)) return v;
}
export default scanWhile;
