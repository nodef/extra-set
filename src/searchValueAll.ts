import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Searches a value throughout.
 * @param x a set
 * @param v search value
 * @param fn compare function (a, b)
 * @returns values
 */
function searchAll<T>(x: Iterable<T>, v: T, fn: compareFn<T>=null): T[] {
  var fn = fn||cmp, a: T[] = [];
  for(var u of x)
    if(fn(u, v)===0) a.push(u);
  return a;
}
export default searchAll;
