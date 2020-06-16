import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x a set
 * @param fn called function (v, v, x)
 */
function forEach<T>(x: Iterable<T>, fn: calledFn<T>): void {
  for(var v of x)
    fn(v, v, x);
}
export default forEach;
