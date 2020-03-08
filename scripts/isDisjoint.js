const intersection = require('./intersection');

/**
 * Checks if collections have no element in common.
 * @param {...Iterable} cs collections
 */
function isDisjoint(...cs) {
  // can this be improved?
  return intersection(...cs).size===0;
}
module.exports = isDisjoint;
