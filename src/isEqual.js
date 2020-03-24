/**
 * Checks if two sets have the same values.
 * @param {Set} s a set
 * @param {Set} t another set
 * @returns {boolean}
 */
function isEqual(s, t) {
  if(s.size!==t.size) return false;
  for(var v of s)
    if(!t.has(v)) return false;
  return true;
}
module.exports = isEqual;
