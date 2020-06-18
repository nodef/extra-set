import type {testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function count<T>(x: Iterable<T>, ft: testFn<T>): number {
  var a = 0;
  for(var v of x)
    if(ft(v, v, x)) a++;
  return a;
}
export default count;
