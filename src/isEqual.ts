import compare from "./compare";

/**
 * Checks if two sets are equal.
 * @param x a set
 * @param y another set
 */
function isEqual<T>(x: Set<T>, y: Set<T>): boolean {
  return x.size===y.size && compare(x, y)===0;
}
export default isEqual;
