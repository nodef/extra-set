import type {testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function count<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): number {
  var a = 0;
  for(var v of x)
    if(fn.call(ths, v, v, x)) a++;
  return a;
}
export default count;
