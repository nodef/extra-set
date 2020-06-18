/**
 * Joins values together.
 * @param x a set
 * @param sep separator (,)
 */
function join<T>(x: Iterable<T>, sep: string=','): string {
  return [...x].join(sep);
}
export default join;
