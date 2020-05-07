import is from './is';
import type {mapFn} from './_types';

function flatMapTo(x: Iterable<any>, fn: mapFn<any, any>, ths: object, a: Set<any>): Set<any> {
  for(var u of x) {
    var v = fn.call(ths, u, u, x);
    if(is(v)) flatMapTo(v, fn, ths, a);
    else a.add(v);
  }
  return a;
}

/**
 * Flattens nested set, using map function.
 * @param x a nested set
 * @param fn map function (v, v, x)
 * @param ths this argument
 */
function flatMap<T, U>(x: Iterable<any>, fn: mapFn<T, U>, ths: object=null): Set<U> {
  return flatMapTo(x, fn, ths, new Set<any>());
}
export default flatMap;
