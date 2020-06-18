/**
 * Checks if value is set.
 * @param v value
 */
function is<T>(v: any): v is Set<T> {
  return v instanceof Set;
}
export default is;
