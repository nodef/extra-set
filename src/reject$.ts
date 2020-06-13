import type {testFn} from './_types';

/**
 * Discards values which pass a test.
 * @param x a set (updated)
 * @param fn test function (v, v, x)
 * @param ths this argument
 * @returns x
 */
function reject$<T>(x: Set<T>, fn: testFn<T>, ths: object=null): Set<T> {
  for(var v of x)
    if(fn.call(ths, v, v, x)) x.delete(v);
  return x;
}
export default reject$;
