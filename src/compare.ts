/**
 * Compares two sets.
 * @param x a set
 * @param y another set
 * @returns x=y: 0, otherwise: -ve/+ve
 */
function compare<T>(x: Set<T>, y: Set<T>): number {
  for(var v of x)
    if(!y.has(v)) return 1;
  for(var v of y)
    if(!x.has(v)) return -1;
  return 0;
}
export default compare;
