const union = require('./union');

/**
 * Checks if set is contained in all lists.
 * @param {Set} x a set
 * @param {...Iterable} ys lists
 * @returns {boolean}
 */
function isSuperset(x, ...ys) {
  return union(x, ...ys).size===x.size;
}
module.exports = isSuperset;
