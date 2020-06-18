import id from './_id';
import is from './is';
import type {mapFn, testFn} from './_types';

function flatTo<T=any>(x: Iterable<T>, n: number, fm: mapFn<T, any>, ft: testFn<T>, a: Set<any>): Set<any> {
  for(var v of x) {
    var v1 = fm(v, v, x);
    if(n!==0 && ft(v1, v1, x)) flatTo(v1, n-1, fm, ft, a);
    else a.add(v1);
  }
  return a;
}

/**
 * Flattens nested set to given depth.
 * @param x a nested set
 * @param n maximum depth (-1 => all)
 * @param fm map function (v, v, x)
 * @param ft test function (v, v, x)
 */
function flat<T=any>(x: Iterable<T>, n: number=-1, fm: mapFn<T, any>=null, ft: testFn<T>=null): Set<any> {
  var fm = fm||id, ft = ft||is;
  return flatTo(x, n, fm, ft, new Set());
}
export default flat;
