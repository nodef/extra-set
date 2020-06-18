import id from './_id';
import scanUntil from './scanUntil';
import type {testFn} from './_types';

/**
 * Checks if any value satisfies a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function some<T>(x: Iterable<T>, ft: testFn<T>=null): boolean {
  var ft = ft||id as testFn<T>;
  return scanUntil(x, ft)!==undefined;
}
export default some;
