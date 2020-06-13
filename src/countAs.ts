import id from './_id';
import type {mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 * @returns Map {value => count}
 */
function countAs<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>, ths: object=null): Map<T|U, number> {
  var fn = fn||id;
  var a = new Map();
  for(var v of x) {
    var v1 = fn.call(ths, v, v, x);
    var n = a.get(v1)||0;
    a.set(v1, n+1);
  }
  return a;
}
export default countAs;
