const union$ = require('./union$');

/**
 * Gives a set with values from all lists.
 * @param {...Iterable} xs lists
 * @returns {Set}
 */
function union(...xs) {
  return union$(new Set(), ...xs);
}
module.exports = union;
