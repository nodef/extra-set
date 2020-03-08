const difference$ = require('./difference$');

/**
 * Gives a set excluding values in collections.
 * @param {Iterable} s a set
 * @param {...Iterable} cs collections
 */
function difference(s, ...cs) {
  return difference$(new Set(s), cs);
}
module.exports = difference;
