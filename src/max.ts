import iterableMax from '@extra-iterable/max';
import type {compareFn} from './_types';

/**
 * Finds largest value.
 * @param x a set
 * @param fn compare function (a, b)
 */
function max<T>(x: Iterable<T>, fn: compareFn<T>=null): T {
  return iterableMax(x, fn);
}
export default max;
