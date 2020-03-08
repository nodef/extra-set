const asSets = require('./_asSets');

/**
 * Gives a set with values in all collections.
 * @param {Set} s a set (updated)
 * @param {...Iterable} cs collections
 */
function intersection$(s, ...cs) {
  var ts = asSets(cs);
  values: for(var v of s) {
    for(var t of ts)
      if(!t.has(v)) { s.delete(v); continue values; }
  }
  return s;
}
module.exports = intersection$;
