/**
 * Converts values through a mapping.
 * @param {Set} x a set
 * @param {function} fn map function (v, v, x)
 * @param {object?} ths this argument
 * @returns {Set}
 */
function map(x, fn, ths=null) {
  var a = new Set();
  for(var v of x)
    a.add(fn.call(ths, v, v, x));
  return a;
}
module.exports = map;
