import {subsequence} from 'extra-array';

/**
 * Picks an arbitrary subset.
 * @param x a set
 * @param n number of values (-1 => any)
 * @param r random seed 0->1
 */
function subobject<T>(x: Iterable<T>, n: number=-1, r: number=Math.random()): Set<T> {
  var vs = subsequence([...x], n, r);
  return new Set(vs);
}
export default subobject;
