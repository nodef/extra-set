/**
 * Gives a set excluding values in all lists.
 * @param {Set} x a set (updated)
 * @param {...Iterable} ys lists
 * @returns {Set} x
 */
function difference$(x, ...ys) {
  for(var c of ys)
    for(var v of c)
      x.delete(v);
  return x;
}
module.exports = difference$;
