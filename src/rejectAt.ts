import rejectAt$ from "./rejectAt$";

/**
 * Gets set without given values.
 * @param x a set
 * @param vs values
 */
function rejectAt<T>(x: Iterable<T>, vs: T[]): Set<T> {
  return rejectAt$(new Set(x), vs);
}
export default rejectAt;
