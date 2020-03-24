const difference$ = require('./difference$');

/**
 * Gives a set excluding values in all lists.
 * @param {Iterable} x a set
 * @param {...Iterable} ys lists
 * @returns {Set}
 */
function difference(x, ...ys) {
  return difference$(new Set(x), ...ys);
}
module.exports = difference;
