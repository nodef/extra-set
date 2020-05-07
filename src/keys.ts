/**
 * Lists all values.
 * @param x a map
 * @returns ...values
 */
function* keys<T>(x: Iterable<T>): IterableIterator<T> {
  for(var v of x)
    yield v;
}
export default keys;
