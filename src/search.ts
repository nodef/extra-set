import find from './find';
import type {testFn} from './_types';

/**
 * Finds a value passing a test.
 * @param x a set
 * @param fn test function (v, v, x)
 */
function search<T>(x: Iterable<T>, fn: testFn<T>): T {
  return find(x, fn);
}
export default search;
