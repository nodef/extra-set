const tosets = require('./_tosets');

/**
 * Gives a set with values in all lists.
 * @param {Set} x a set (updated)
 * @param {...Iterable} ys lists
 * @returns {Set} x
 */
function intersection$(x, ...ys) {
  var ts = tosets(ys);
  x: for(var v of x) {
    for(var t of ts)
      if(!t.has(v)) { x.delete(v); continue x; }
  }
  return x;
}
module.exports = intersection$;
