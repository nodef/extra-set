import iterableCountAs from '@extra-iterable/count-as';
import type {mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 * @returns Map {value => count}
 */
function countOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): Map<T|U, number> {
  return iterableCountAs(x, v => fn.call(ths, v, v, x));
}
export default countOn;
