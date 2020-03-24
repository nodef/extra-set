const intersection = require('./intersection');

/**
 * Checks if lists have no value in common.
 * @param {...Iterable} xs lists
 * @returns {boolean}
 */
function isDisjoint(...xs) {
  return intersection(...xs).size===0;
}
module.exports = isDisjoint;
