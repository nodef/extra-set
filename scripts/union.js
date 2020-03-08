const union$ = require('./union$');

/**
 * Gives a set with all elements from collections.
 * @param {...Iterable} cs collections
 */
function union(...cs) {
  return union$(new Set(), ...cs);
}
module.exports = union;
