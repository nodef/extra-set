import id from './_id';
import is from './is';
import concat$ from './concat$';
import type {mapFn, testFn} from './_types';

/**
 * Flattens nested set, using map function.
 * @param x a nested set
 * @param fm map function (v, v, x)
 * @param ft test function (v, v, x)
 */
function flatMap<T=any>(x: Iterable<T>, fm: mapFn<T, any>=null, ft: testFn<T>=null): Set<any> {
  var fm = fm||id, ft = ft||is;
  var a = new Set();
  for(var v of x) {
    var v1 = fm(v, v, x);
    if(ft(v1, v1, x)) concat$(a, v1);
    else a.add(v1);
  }
  return a;
}
export default flatMap;
