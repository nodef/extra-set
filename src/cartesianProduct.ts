import id from "./_id";
import type {mapFn} from "./_types";

/**
 * Lists cartesian product of sets.
 * @param xs sets
 * @param fn map function (vs, vs)
 */
function* cartesianProduct<T, U=Set<T>>(xs: Set<T>[], fn: mapFn<Set<T>, Set<T>|U>=null): IterableIterator<Set<T>|U> {
  var fn = fn||id;
  var XS  = xs.length;
  var vss = xs.map(x => [...x]);
  var ls = vss.map(vs => vs.length);
  var is = vss.map(vs => 0);
  while(true) {
    var a = new Set<T>();
    for(var n=0; n<XS; n++) {
      var i  = is[n];
      var vs = vss[n], v = vs[i];
      a.add(v);
    }
    yield fn(a, a, null);
    for(var r=XS-1; r>=0; r--) {
      is[r]++;
      if(is[r]<ls[r]) break;
      is[r] = 0;
    }
    if(r<0) break;
  }
}
export default cartesianProduct;
