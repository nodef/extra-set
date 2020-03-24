const cmp = require('./_cmp');

/**
 * Compares two sets.
 * @param {Set} x a set
 * @param {Set} y another set
 * @returns {number} x<y: -1, x=y: 0, x>y: 1
 */
function compare(x, y) {
  var X = x.size, Y = y.size;
  if(X!==Y) return X-Y;
  var ix = x[Symbol.iterator]();
  var iy = x[Symbol.iterator]();
  var fn = cmp;
  while(true) {
    var rx = ix.next(), ry = iy.next();
    if(rx.done) return 0;
    var c = fn(rx.value, ry.value);
    if(c!==0) return c;
  }
}
module.exports = compare;
