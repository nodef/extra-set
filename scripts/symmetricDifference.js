const asSets = require('./_asSets');
const union = require('./union');

/**
 * Gives a set with values in odd number of collections.
 * @param {...Iterable} cs collections
 * @returns {Set}
 */
function symmetricDifference(...cs) {
  var s = union(...cs);
  var ts = asSets(cs);
  for(var v of s) {
    var n = 0;
    for(var t of ts)
      if(t.has(v)) n++;
    if((n & 1)===0) s.delete(v);
  }
  return s;
}
module.exports = symmetricDifference;
