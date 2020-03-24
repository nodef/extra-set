const intersection = require('./intersection');

/**
 * Checks if set is part of all lists.
 * @param {Set} x a set
 * @param {...Iterable} ys lists
 * @returns {boolean}
 */
function isSubset(x, ...ys) {
  return intersection(x, ...ys).size===x.size;
}
module.exports = isSubset;
