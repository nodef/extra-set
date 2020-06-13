/**
 * Lists all values.
 * @param x a set
 */
function* values<T>(x: Iterable<T>): IterableIterator<T> {
  yield* x;
}
export default values;
