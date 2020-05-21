import iterableValues from '@extra-iterable/values';

/**
 * Lists all values.
 * @param x a map
 */
function* values<T>(x: Iterable<T>): IterableIterator<T> {
  for(var v of x)
    yield v;
}
export default values;
