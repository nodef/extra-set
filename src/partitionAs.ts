import id from './_id';
import type {mapFn} from './_types';

/**
 * Segregates values by similarity.
 * @param x a set
 * @param fn map function (v, v, x)
 * @param ths this argument
 */
function partitionAs<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>, ths: object=null): Map<T|U, Set<T>> {
  var fn = fn||id;
  var a = new Map();
  for(var v of x) {
    var v1 = fn.call(ths, v, v, x);
    if(!a.has(v1)) a.set(v1, new Set());
    a.get(v1).add(v);
  }
  return a;
}
export default partitionAs;
