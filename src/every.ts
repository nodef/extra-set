import id from './_id';
import scanWhile from './scanWhile';
import type {testFn} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function every<T>(x: Iterable<T>, ft: testFn<T>=null) {
  var ft = ft||id as testFn<T>;
  return scanWhile(x, ft)===undefined;
}
export default every;
