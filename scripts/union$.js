/**
 * Gives a set with values from all collections.
 * @param {Set} s a set (updated)
 * @param {...Iterable} cs collections
 */
function union$(s, ...cs) {
  for (var c of cs)
    for(var v of c)
      s.set(v);
  return s;
}
module.exports = union$;
