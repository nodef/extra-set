const intersection = require('./intersection');

/**
 * Checks if set is part of all collections.
 * @param {Set} s a set
 * @param {...Iterable} cs collections
 */
function isSubset(s, ...cs) {
  // might have better approach
  return intersection(s, ...cs).size===s;
}
module.exports = isSubset;
