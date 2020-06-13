/**
 * Lists all value-value pairs.
 * @param x a set
 */
function* entries<T>(x: Set<T>): IterableIterator<[T, T]> {
  yield* x.entries();
}
export default entries;
