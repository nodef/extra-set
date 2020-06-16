import id from './_id';
import scanUntil from './scanUntil';
import type {testFn} from './_types';

/**
 * Checks if any value satisfies a test.
 * @param x a set
 * @param fn test function (v, v, x)
 */
function some<T>(x: Iterable<T>, fn: testFn<T>=null): boolean {
  var fn = fn||id as testFn<T>;
  return scanUntil(x, fn)!==undefined;
}
export default some;
