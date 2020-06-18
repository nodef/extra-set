import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x a set
 * @param fc called function (v, v, x)
 */
function forEach<T>(x: Iterable<T>, fc: calledFn<T>): void {
  for(var v of x)
    fc(v, v, x);
}
export default forEach;
