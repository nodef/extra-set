import id from './_id';
import type {mapFn} from './_types';

/**
 * Checks if set has a value.
 * @param x a set
 * @param v value?
 * @param fn map function (v, v, x)
 * @param ths this argument
 */
function isValueOn<T, U>(x: Iterable<T>, v: T, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var fn = fn||id;
  var v1 = fn.call(ths, v, v, null);
  for(var u of x) {
    var u1 = fn.call(ths, u, u, x);
    if(u1===v1) return true;
  }
  return false;
}
export default isValueOn;
