import concat$ from './concat$';
import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a set (updated)
 * @param fn map function (v, v, x)
 * @returns x
 */
function map$<T>(x: Set<T>, fn: mapFn<T, T>): Set<T> {
  var vs = [];
  for(var v of x)
    vs.push(fn(v, v, x));
  x.clear();
  return concat$(x, vs);
}
export default map$;
