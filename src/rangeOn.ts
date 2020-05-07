import iterableRangeOn from '@extra-iterable/range-on';
import type {mapFn} from './_types';

/**
 * Finds smallest and largest values.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 * @returns [min, max]
 */
function rangeOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): [T, T] {
  return iterableRangeOn(x, v => fn.call(ths, v, v, x));
}
export default rangeOn;
