import symmetricDifference$ from './symmetricDifference$';

/**
 * Gives values present in odd number of sets.
 * @param xs sets
 */
function symmetricDifference<T>(...xs: Iterable<T>[]): Set<T> {
  return symmetricDifference$(new Set(), ...xs);
}
export default symmetricDifference;
