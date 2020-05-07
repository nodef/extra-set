import type {testFn} from './_types';

/**
 * Checks if atleast one value satisfies a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function some<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null) {
  for(var v of x)
    if(fn.call(ths, v, v, x)) return true;
  return false;
}
export default some;
