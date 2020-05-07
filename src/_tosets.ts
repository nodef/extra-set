/**
 * Converts iterables to sets.
 * @param xs iterables
 */
function tosets<T>(xs: Iterable<T>[]): Set<T>[] {
  var a = [];
  for(var x of xs)
    a.push(x instanceof Set? x : new Set<T>(x));
  return a;
}
export default tosets;
