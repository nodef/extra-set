/**
 * Keeps values which satisfy a test.
 * @param {Set} x a set
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 * @returns {Set}
 */
function filter(x, fn, ths=null) {
  var a = new Set();
  for(var v of x)
    if(fn.call(ths, v, v, x)) a.add(v);
  return a;
}
module.exports = filter;
