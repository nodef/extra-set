const permutation$ = require('@extra-array/permutation-update');
const random = require('./_random');

function subsetNum(x, n, r) {
  var a = permutation$(Array.from(x), n, r);
  return new Set(a);
}

function subsetAny(x, r) {
  var rnd = random(r), a = new Set();
  for(var v of x)
    if(rnd()>=0.5) a.add(v);
  return a;
}

/**
 * Gives an arbitrary subset.
 * @param {Set} x a set
 * @param {number?} n number of values (-1 => any)
 * @param {number?} r random seed 0->1
 * @returns {Set}
 */
function subset(x, n=-1, r=Math.random()) {
  var X = x.size;
  if(n>=0) return n>X? null:subsetNum(x, n, r);
  return subsetAny(x, r);
}
module.exports = subset;
