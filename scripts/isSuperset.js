const union = require('./union');

/**
 * Checks if all collections are part of set.
 * @param {Set} s a set
 * @param {...Iterable} cs collections
 */
function isSuperset(s, ...cs) {
  // can it be better?
  return union(s, ...cs).size===s;
}
module.exports = isSuperset;
