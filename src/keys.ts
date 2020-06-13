/**
 * Lists all values.
 * @param x a set
 */
function* keys<T>(x: Iterable<T>): IterableIterator<T> {
  for(var v of x)
    yield v;
}
export default keys;
