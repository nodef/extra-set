const union = require('./union');

/**
 * Checks if all collections are part of set.
 * @param {Set} s a set
 * @param {...Iterable} cs collections
 * @returns {boolean}
 */
function isSuperset(s, ...cs) {
  // can it be better?
  return union(s, ...cs).size===s.size;
}
module.exports = isSuperset;
