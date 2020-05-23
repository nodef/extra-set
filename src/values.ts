import iterableValues from '@extra-iterable/values';

/**
 * Lists all values.
 * @param x a set
 */
function* values<T>(x: Iterable<T>): IterableIterator<T> {
  yield* iterableValues(x);
}
export default values;
