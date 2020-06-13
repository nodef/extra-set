import remove$ from './remove$';

/**
 * Deletes a value.
 * @param x a set
 * @param v value
 */
function remove<T>(x: Iterable<T>, v: T): Set<T> {
  return remove$(new Set(x), v);
}
export default remove;
