import drop from './drop';

/**
 * Removes first value.
 * @param x a set
 */
function shift<T>(x: Iterable<T>): Set<T> {
  return drop(x, 1);
}
export default shift;
