import findAll from './findAll';
import type {testFn} from './_types';

/**
 * Finds values passing a test.
 * @param x a set
 * @param fn test function (v, v, x)
 */
function searchAll<T>(x: Iterable<T>, fn: testFn<T>): T[] {
  return findAll(x, fn);
}
export default searchAll;
