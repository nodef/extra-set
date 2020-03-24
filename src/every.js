/**
 * Checks if all values satisfy a test.
 * @param {Set} x a set
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function every(x, fn, ths=null) {
  for(var v of x)
    if(!fn.call(ths, v, v, x)) return false;
  return true;
}
module.exports = every;
