import iterableMaxOn from '@extra-iterable/max-on';
import type {mapFn} from './_types';

/**
 * Finds largest value.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 */
function maxOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): T {
  return iterableMaxOn(x, v => fn.call(ths, v, v, x));
}
export default maxOn;
