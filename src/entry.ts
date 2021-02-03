import {value} from "extra-array";

/**
 * Picks an arbitrary entry.
 * @param x a set
 * @param r random seed 0->1
 */
function entry<T>(x: Set<T>, r: number=Math.random()): [T, T] {
  return value([...x.entries()], r);
}
export default entry;
