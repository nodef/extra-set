/**
 * Creates a set from values.
 * @param vs values
 */
function from<T>(vs: Iterable<T>): Set<T> {
  return new Set(vs);
};
export default from;
