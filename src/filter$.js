/**
 * Keeps values which satisfy a test.
 * @param {Set} x a set (updated)
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 * @returns {Set} x
 */
function filter$(x, fn, ths=null) {
  for(var v of x)
    if(!fn.call(ths, v, v, x)) x.delete(v);
  return x;
}
module.exports = filter$;
