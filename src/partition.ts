import type {testFn} from "./_types";

/**
 * Segregates values by test result.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns [satisfies, doesnt]
 */
function partition<T>(x: Iterable<T>, ft: testFn<T>): [Set<T>, Set<T>] {
  var t = new Set<T>();
  var f = new Set<T>();
  for(var v of x) {
    if(ft(v, v, x)) t.add(v);
    else f.add(v);
  }
  return [t, f];
}
export default partition;
