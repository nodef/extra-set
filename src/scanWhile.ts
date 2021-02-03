import type {testFn} from "./_types";

/**
 * Finds first value not passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function scanWhile<T>(x: Iterable<T>, ft: testFn<T>): T {
  for(var v of x)
    if(!ft(v, v, x)) return v;
}
export default scanWhile;
