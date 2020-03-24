/**
 * Removes a value from a set.
 * @param {Set} x a set (updated)
 * @returns {Array} x
 */
function pop$(x) {
  for(var v of x) {
    x.delete(v);
    return v;
  }
}
module.exports = pop$;
