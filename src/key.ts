import value from './value';

/**
 * Picks an arbitrary value.s
 * @param x a set
 * @param r random seed 0->1
 */
function key<T>(x: Iterable<T>, r: number=Math.random()): T {
  return value(x, r);
}
export default key;
