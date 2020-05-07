import iterableMin from '@extra-iterable/min';
import type {compareFn} from './_types';

/**
 * Finds smallest value.
 * @param x a set
 * @param fn compare function (a, b)
 */
function min<T>(x: Iterable<T>, fn: compareFn<T>=null): T {
  return iterableMin(x, fn);
}
export default min;
