import concat$ from './concat$';

/**
 * Gives values present in any set.
 * @param x a set (updated)
 * @param ys other sets
 * @returns x
 */
function union$<T>(x: Set<T>, ...ys: Iterable<T>[]): Set<T> {
  return concat$(x, ...ys);
}
export default union$;
