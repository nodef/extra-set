import type {testFn} from './_types';

/**
 * Finds first value not passing a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function scanWhile<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): T {
  for(var v of x)
    if(!fn.call(ths, v, v, x)) return v;
}
export default scanWhile;
