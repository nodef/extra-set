/**
 * Checks if value is set.
 * @param {*} x a value
 */
function is(x) {
  return x instanceof Set;
}
/**
 * Checks if two sets have the same elements.
 * @param {Set} s a set
 * @param {Set} t another set
 */
function isEqual(s, t) {
  if(s.size!==t.size) return false;
  for(var v of s)
    if(!t.has(v)) return false;
  return true;
}
function asSets(cs) {
  var a = []
  for(var c of cs)
    a.push(c instanceof Set? c : new Set(c));
  return a;
}
/**
 * Gives a set with elements in all collections.
 * @param {Set} s a set (updated)
 * @param {...Iterable} cs collections
 */
function intersection$(s, ...cs) {
  var ts = asSets(cs);
  values: for(var v of s) {
    for(var t of ts)
      if(!t.has(v)) { s.delete(v); continue values; }
  }
  return s;
}
/**
 * Gives a set with elements in all collections.
 * @param {...Iterable} cs collections
 */
function intersection(...cs) {
  if(cs.length===0) return new Set();
  var s = new Set(cs.pop());
  return intersection$(s, ...cs);
}
/**
 * Checks if elements of set are present in all collections.
 * @param {Set} s a set
 * @param {...Iterable} cs collections
 */
function isSubset(s, ...cs) {
  // might have better approach
  return intersection(s, ...cs).size===s;
}
/**
 * Gives a set with all elements from collections.
 * @param {Set} s a set (updated)
 * @param {...Iterable} cs collections
 */
function union$(s, ...cs) {
  for (var c of cs)
    for(var v of c)
      s.set(v);
  return s;
}
/**
 * Gives a set with all elements from collections.
 * @param {...Iterable} cs collections
 */
function union(...cs) {
  return union$(new Set(), ...cs);
}
/**
 * Checks if elements of all collections are present in set.
 * @param {Set} s a set
 * @param {...Iterable} cs collections
 */
function isSuperset(s, ...cs) {
  // can it be better?
  return union(s, ...cs).size===s;
}
/**
 * Checks if collections have no element in common.
 * @param {...Iterable} cs collections
 */
function isDisjoint(...cs) {
  // can this be improved?
  return intersection(...cs).size===0;
}
/**
 * Gives a set without all elements in collections.
 * @param {Set} s a set (updated)
 * @param {...Iterable} cs collections
 */
function difference$(s, ...cs) {
  for(var c of cs)
    for(var v of c)
      s.delete(v);
  return s;
}
/**
 * Gives a set without all elements in collections.
 * @param {Iterable} s a set
 * @param {...Iterable} cs collections
 */
function difference(s, ...cs) {
  return difference$(new Set(s), cs);
}
/**
 * Gives a set with elements in odd no. of collections.
 * @param {...Iterable} cs collections
 */
function symmetricDifference(...cs) {
  var s = union(...cs);
  var ts = asSets(cs);
  for(var v of s) {
    var n = 0;
    for(var t of ts)
      if(t.has(v)) n++;
    if(n & 1===0) s.delete(v);
  }
  return s;
}
exports.is = is;
exports.isEqual = isEqual;
exports.isSubset = isSubset;
exports.isSuperset = isSuperset;
exports.isDisjoint = isDisjoint;
exports.union = union;
exports.union$ = union$;
exports.intersection = intersection;
exports.intersection$ = intersection$;
exports.difference = difference;
exports.difference$ = difference$;;
exports.symmetricDifference = symmetricDifference;
