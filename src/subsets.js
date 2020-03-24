const pop = require('./pop');

/**
 * Lists all subsets of a set.
 * @param {Set} x a set
 * @param {number?} n number of values (-1 => any)
 * @returns {Iterable<Set>}
 */
function* subsets(x, n=-1) {
  var X = x.size;
  if(n>=X) { if(n==X) yield x; return; }
  if(n===0 || X===0) { yield new Set(); return; }
  var [a, y] = pop(x);
  yield* subsets(y, n);
  for(var s of subsets(y, n-1)) {
    s.add(a);
    yield s;
  }
}  
module.exports = subsets;
