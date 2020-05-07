import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Compares two sets.
 * @param x a set
 * @param y another set
 * @param fn compare function (a, b)
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare<T>(x: Set<T>, y: Set<T>, fn: compareFn<T>=null): number {
  var fn = fn||cmp;
  var n = x.size - y.size;
  if(n!==0) return Math.sign(n);
  for(var v of x) {
    var c = y.has(v)? 0 : -1;
    if(c!==0) return c;
  }
  return 0;
}
export default compare;
