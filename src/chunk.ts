import {chunk as arrayChunk} from "extra-array";

/**
 * Breaks set into chunks of given size.
 * @param x a set
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T>(x: Set<T>, n: number=1, s: number=n): Set<T>[] {
  return arrayChunk([...x], n ,s).map(c => new Set(c));
}
export default chunk;
