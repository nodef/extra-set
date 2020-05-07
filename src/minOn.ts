import iterableMinOn from '@extra-iterable/min-on';
import type {mapFn} from './_types';

/**
 * Finds smallest value.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 */
function minOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): T {
  return iterableMinOn(x, v => fn.call(ths, v, v, x));
}
export default minOn;
