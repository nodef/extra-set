import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds smallest and largest entries.
 * @param x a set
 * @param fc compare function (a, b)
 * @param fm map function (v, v, x)
 * @returns [smallest, largest]
 */
function range<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): [[T, T], [T, T]] {
  var fc = fc||cmp, fm = fm||id;
  var mu: T, mv: T|U;
  var nu: T, nv: T|U;
  var i = 0;
  for(var u of x) {
    var v = fm(u, u, x);
    if(i===0 || fc(v, mv)<0) { mu = u; mv = v; }
    if(i===0 || fc(v, nv)>0) { nu = u; nv = v; }
    i++;
  }
  return [[mu, mu], [nu, nu]];
}
export default range;
