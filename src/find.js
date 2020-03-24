/**
 * Gets a value which satisfies a test.
 * @param {Set} x a set
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 */
function find(x, fn, ths=null) {
  for(var v of x)
    if(fn.call(ths, v, v, x)) return x;
}
module.exports = find;
