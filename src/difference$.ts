/**
 * Gives values of set not present in another.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
function difference$<T>(x: Set<T>, y: Set<T>): Set<T> {
  for(var v of y)
    x.delete(v);
  return x;
}
export default difference$;
