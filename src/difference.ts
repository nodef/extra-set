import difference$ from './difference$';

/**
 * Gives values of a set not present in others.
 * @param x a set
 * @param ys other sets
 */
function difference<T>(x: Iterable<T>, ...ys: Iterable<T>[]): Set<T> {
  return difference$(new Set<T>(x), ...ys);
}
export default difference;
