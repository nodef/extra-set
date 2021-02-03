import drop$ from "./drop$";

/**
 * Removes first value.
 * @param x a set (updated)
 * @returns x
 */
function shift$<T>(x: Set<T>): Set<T> {
  return drop$(x, 1);
}
export default shift$;
