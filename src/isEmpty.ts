/**
 * Checks if set is empty.
 * @param x a set
 */
function isEmpty<T>(x: Set<T>): boolean {
  return x.size===0;
}
export default isEmpty;
