import type {reduceFn} from './_types';

/**
 * Reduces values to a single value.
 * @param x a set
 * @param fr reduce function (acc, v, v, x)
 * @param acc initial value
 */
function reduce<T, U=T>(x: Iterable<T>, fr: reduceFn<T, T|U>, acc?: T|U): T|U {
  var init = arguments.length <= 2;
  for(var v of x) {
    if(init) { acc = v; init = false; }
    else acc = fr(acc, v, v, x);
  }
  return acc;
}
export default reduce;
