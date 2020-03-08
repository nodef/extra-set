const union$ = require('./union$');

/**
 * Gives a set with values from all collections.
 * @param {...Iterable} cs collections
 * @returns {Set}
 */
function union(...cs) {
  return union$(new Set(), ...cs);
}
module.exports = union;
