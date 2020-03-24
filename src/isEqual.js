const compare = require('./compare');

/**
 * Checks if two sets have the same values.
 * @param {Set} x a set
 * @param {Set} y another set
 * @returns {boolean}
 */
function isEqual(x, y) {
  return compare(x, y)===0;
}
module.exports = isEqual;
