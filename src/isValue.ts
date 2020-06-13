/**
 * Checks if set has a value.
 * @param x a set
 * @param v value?
 */
function isValue<T>(x: Set<T>, v: T): boolean {
  return x.has(v);
}
export default isValue;
