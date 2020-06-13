import {join as iterableJoin} from 'extra-iterable';

/**
 * Joins values together.
 * @param x a set
 * @param sep separator (,)
 */
function join<T>(x: Iterable<T>, sep: string=','): string {
  return iterableJoin(x, sep);
}
export default join;
