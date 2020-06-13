import type {reduceFn} from './_types';

/**
 * Reduces values to a single value.
 * @param x a set
 * @param fn reduce function (acc, v, v, x)
 * @param acc initial value
 */
function reduce<T, U=T>(x: Iterable<T>, fn: reduceFn<T, T|U>, acc?: T|U): T|U {
  var init = arguments.length <= 2;
  for(var v of x) {
    if(init) { acc = v; init = false; }
    else acc = fn(acc, v, v, x);
  }
  return acc;
}
export default reduce;
