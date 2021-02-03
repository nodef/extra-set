import drop from "./drop";

/**
 * Gets set without the first value.
 * @param x a set
 */
function tail<T>(x: Iterable<T>): Set<T> {
  return drop(x, 1);
}
export default tail;
