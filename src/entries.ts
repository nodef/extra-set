/**
 * Lists all value-value pairs.
 * @param x a set
 */
function* entries<T>(x: Iterable<T>): IterableIterator<[T, T]> {
  for(var v of x)
    yield [v, v];
}
export default entries;
