import type {testFn} from './_types';

/**
 * Finds values passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function findAll<T>(x: Iterable<T>, ft: testFn<T>): T[] {
  var a = [];
  for(var v of x)
    if(ft(v, v, x)) a.push(v);
  return a;
}
export default findAll;
