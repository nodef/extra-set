import iterableCount from '@extra-iterable/count';
import type {testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function count<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): number {
  return iterableCount(x, v => fn.call(ths, v, v, x));
}
export default count;
