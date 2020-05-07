import type {reduceFn} from './_types';

/**
 * Reduce all values to one value.
 * @param x a set
 * @param fn reduce function (acc, v, v, x)
 * @param acc initial value
 */
function reduce<T, U>(x: Iterable<T>, fn: reduceFn<T, U>, acc?: U) {
  var init = arguments.length <= 2;
  for(var v of x) {
    if(init) { init = false; acc = v as any as U; }
    else acc = fn(acc, v, v, x);
  }
  return acc;
}
export default reduce;
