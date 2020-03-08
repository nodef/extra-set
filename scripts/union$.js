/**
 * Gives a set with all elements from collections.
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
