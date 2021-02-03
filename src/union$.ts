import concat$ from "./concat$";

/**
 * Gives values present in any set.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
function union$<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  return concat$(x, y);
}
export default union$;
