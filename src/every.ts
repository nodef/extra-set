import scanWhile from './scanWhile';
import type {testFn} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function every<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null) {
  return scanWhile(x, fn, ths)===undefined;
}
export default every;
