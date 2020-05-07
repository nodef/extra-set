import type {testFn} from './_types';

/**
 * Segregates set keeping similar values together.
 * @param x a set
 * @param fn test function (v, v, x)
 * @param ths this argument
 * @returns [satisfies, doesnt]
 */
function partition<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): [Set<T>, Set<T>] {
  var t = new Set<T>();
  var f = new Set<T>();
  for(var v of x) {
    if(fn.call(ths, v, v, x)) t.add(v);
    else f.add(v);
  }
  return [t, f];
}
export default partition;
