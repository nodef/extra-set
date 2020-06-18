import find from './find';
import type {testFn} from './_types';

/**
 * Finds first value passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function scanUntil<T>(x: Iterable<T>, ft: testFn<T>): T {
  return find(x, ft);
}
export default scanUntil;
