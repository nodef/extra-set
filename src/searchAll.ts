import findAll from './findAll';
import type {testFn} from './_types';

/**
 * Finds values passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function searchAll<T>(x: Iterable<T>, ft: testFn<T>): T[] {
  return findAll(x, ft);
}
export default searchAll;
