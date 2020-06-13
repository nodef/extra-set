import {value as arrayValue} from 'extra-array';

/**
 * Picks an arbitrary value.
 * @param x a set
 * @param r random seed 0->1
 */
function value<T>(x: Iterable<T>, r: number=Math.random()): T {
  return arrayValue([...x], r);
}
export default value;
