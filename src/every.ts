import id from './_id';
import scanWhile from './scanWhile';
import type {testFn} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x a set
 * @param fn test function (v, v, x)
 */
function every<T>(x: Iterable<T>, fn: testFn<T>=null) {
  var fn = fn||id as testFn<T>;
  return scanWhile(x, fn)===undefined;
}
export default every;
