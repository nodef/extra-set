/**
 * Gives a set excluding values in collections.
 * @param {Set} s a set (updated)
 * @param {...Iterable} cs collections
 */
function difference$(s, ...cs) {
  for(var c of cs)
    for(var v of c)
      s.delete(v);
  return s;
}
module.exports = difference$;
