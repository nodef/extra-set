import scanUntil from './scanUntil';
import type {testFn} from './_types';

/**
 * Checks if any value satisfies a test.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 */
function some<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): boolean {
  return scanUntil(x, fn, ths)!==undefined;
}
export default some;
