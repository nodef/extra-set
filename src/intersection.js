const intersection$ = require('./intersection$');

/**
 * Gives a set with values in all lists.
 * @param {...Iterable} xs lists
 * @returns {Set}
 */
function intersection(...xs) {
  if(xs.length===0) return new Set();
  var a = new Set(xs.pop());
  return intersection$(a, ...xs);
}
module.exports = intersection;
