import type {testFn} from './_types';

/**
 * Finds a value passing s test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function find<T>(x: Iterable<T>, ft: testFn<T>): T {
  for(var v of x)
    if(ft(v, v, x)) return v;
}
export default find;
