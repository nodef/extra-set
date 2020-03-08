const union$ = require('./union$');

/**
 * Gives a set with all elements from the collections.
 * @param {...Iterable} cs collections
 */
function union(...cs) {
  return union$(new Set(), ...cs);
}
module.exports = union;
