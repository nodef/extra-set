import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a set
 * @param fn map function (v, v, x)
 */
function map<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>): Set<T|U> {
  var a = new Set<T|U>();
  for(var v of x)
    a.add(fn(v, v, x));
  return a;
}
export default map;
