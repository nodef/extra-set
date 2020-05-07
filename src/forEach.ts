import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x a set
 * @param fn called function (v, v, x)
 * @param ths this argument
 */
function forEach<T>(x: Iterable<T>, fn: calledFn<T>, ths: object=null): void {
  for(var v of x)
    fn.call(ths, v, v, x);
}
export default forEach;
