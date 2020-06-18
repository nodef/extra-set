import id from './_id';
import type {mapFn} from './_types';

/**
 * Segregates values by similarity.
 * @param x a set
 * @param fm map function (v, v, x)
 */
function partitionAs<T, U=T>(x: Iterable<T>, fm: mapFn<T, T|U>): Map<T|U, Set<T>> {
  var fm = fm||id;
  var a = new Map();
  for(var v of x) {
    var v1 = fm(v, v, x);
    if(!a.has(v1)) a.set(v1, new Set());
    a.get(v1).add(v);
  }
  return a;
}
export default partitionAs;
