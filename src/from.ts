/**
 * Creates a set from iterable.
 * @param vs iterable
 */
function from<T>(vs: Iterable<T>): Set<T> {
  return new Set(vs);
};
export default from;
