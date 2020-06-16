/**
 * Checks if value is set.
 * @param v value
 */
function is(v: any): v is Set<unknown> {
  return v instanceof Set;
}
export default is;
