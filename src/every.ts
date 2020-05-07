import type {testFn} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function every<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null) {
  for(var v of x)
    if(!fn.call(ths, v, v, x)) return false;
  return true;
}
export default every;
