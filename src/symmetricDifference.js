const tosets = require('./_tosets');
const union = require('./union');

/**
 * Gives a set with values in odd number of lists.
 * @param {...Iterable} xs lists
 * @returns {Set}
 */
function symmetricDifference(...xs) {
  var s = union(...xs);
  var ts = tosets(xs);
  for(var v of s) {
    var n = 0;
    for(var t of ts)
      if(t.has(v)) n++;
    if((n & 1)===0) s.delete(v);
  }
  return s;
}
module.exports = symmetricDifference;
