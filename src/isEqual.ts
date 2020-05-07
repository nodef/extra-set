import compare from './compare';
import type {compareFn} from './_types';

/**
 * Checks if two sets are equal.
 * @param x a set
 * @param y another set
 * @param fn compare function (a, b)
 */
function isEqual<T>(x: Set<T>, y: Set<T>, fn: compareFn<T>=null): boolean {
  return compare(x, y, fn)===0;
}
export default isEqual;
