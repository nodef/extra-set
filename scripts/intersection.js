const intersection$ = require('./intersection$');

/**
 * Gives a set with elements in all collections.
 * @param {...Iterable} cs collections
 */
function intersection(...cs) {
  if(cs.length===0) return new Set();
  var s = new Set(cs.pop());
  return intersection$(s, ...cs);
}
module.exports = intersection;
