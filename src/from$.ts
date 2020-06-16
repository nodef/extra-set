/**
 * Creates set from iterable.
 * @param vs iterable (updatable if set)
 */
function from$<T>(vs: Iterable<T>): Set<T> {
  return vs instanceof Set? vs : new Set(vs);
}
export default from$;
