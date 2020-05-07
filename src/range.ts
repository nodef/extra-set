import iterableRange from '@extra-iterable/range';
import type {compareFn} from './_types';

/**
 * Finds smallest and largest values.
 * @param x a set
 * @param fn compare function (a, b)
 * @returns [min, max]
 */
function range<T>(x: Iterable<T>, fn: compareFn<T>=null): [T, T] {
  return iterableRange(x, fn);
}
export default range;
