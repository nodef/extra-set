/**
 * Simplifies a set to a value.
 * @param {Set} x a set
 * @param {function} fn reduce function (acc, v, v, x)
 * @param {*?} acc inital value
 * @returns {*}
 */
function reduce(x, fn, acc) {
  var al = arguments.length, i = -1;
  for(var v of x) {
    if(++i<0 && al<3) acc = v;
    else acc = fn(acc, v, v, x);
  }
  return acc;
}
module.exports = reduce;
