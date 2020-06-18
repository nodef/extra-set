import symmetricDifference$ from './symmetricDifference$';

/**
 * Gives values not present in both sets.
 * @param x a set
 * @param y another set
 */
function symmetricDifference<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  return symmetricDifference$(new Set(x), y);
}
export default symmetricDifference;
