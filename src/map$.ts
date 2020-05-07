import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a set (updated)
 * @param fn map function (v, v, x)
 * @param ths this argument
 * @returns x
 */
function map$<T, U>(x: Set<T>, fn: mapFn<T, U>, ths: object=null): Set<T> {
  for(var v of x) {
    x.delete(v);
    x.add(fn.call(ths, v, v, x));
  }
  return x;
}
export default map$;
