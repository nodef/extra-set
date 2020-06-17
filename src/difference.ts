import difference$ from './difference$';

/**
 * Gives values of set not present in others.
 * @param x a set
 * @param y another set
 */
function difference<T>(x: Set<T>, y: Set<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(!y.has(v)) a.add(v);
  return a;
}
export default difference;
