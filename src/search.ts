import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Searches a value.
 * @param x a set
 * @param v search value
 * @param fn compare function (a, b)
 * @returns value
 */
function search<T>(x: Iterable<T>, v: T, fn: compareFn<T>=null): T {
  var fn = fn||cmp;
  for(var u of x)
    if(fn(u, v)===0) return u;
}
export default search;
