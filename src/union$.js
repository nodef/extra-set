/**
 * Gives a set with values from all lists.
 * @param {Set} x a set (updated)
 * @param {...Iterable} ys lists
 * @returns {Set} x
 */
function union$(x, ...ys) {
  for (var y of ys)
    for(var v of y)
      x.add(v);
  return x;
}
module.exports = union$;
