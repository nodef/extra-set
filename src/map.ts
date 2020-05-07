import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 */
function map<T, U>(x: Iterable<T>, fn: mapFn<T, U>, ths: object=null): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    a.add(fn.call(ths, v, v, x));
  return a;
}
export default map;
