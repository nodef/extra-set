import concat$ from "./concat$";

/**
 * Gives values present in any set.
 * @param x a set
 * @param y another set
 */
function union<T>(x: Iterable<T>, y: Iterable<T>): Set<T> {
  return concat$(new Set(), x, y);
}
export default union;
