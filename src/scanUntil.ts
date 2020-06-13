import find from './find';
import type {testFn} from './_types';

/**
 * Finds first value passing a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function scanUntil<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): T {
  return find(x, fn, ths);
}
export default scanUntil;
