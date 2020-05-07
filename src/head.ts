/**
 * Gets a value.
 * @param x a set
 */
function head<T>(x: Iterable<T>): T {
  for(var v of x)
    return v;
}
export default head;
