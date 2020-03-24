/**
 * Removes a value from a set.
 * @param {Set} x a set (updated)
 * @returns {Array} [value, updated]
 */
function pop(x) {
  x = new Set(x);
  for(var v of x) {
    x.delete(v);
    return [v, x];
  }
  return [undefined, x];
}
module.exports = pop;
