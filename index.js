/**
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp(a, b) {
  return a<b? -1:(a>b? 1:0);
}
/**
 * Compares two sets.
 * @param {Set} x a set
 * @param {Set} y another set
 * @returns {number} x<y: -1, x=y: 0, x>y: 1
 */
function compare(x, y) {
  var X = x.size, Y = y.size;
  if(X!==Y) return X-Y;
  var ix = x[Symbol.iterator]();
  var iy = x[Symbol.iterator]();
  var fn = cmp;
  while(true) {
    var rx = ix.next(), ry = iy.next();
    if(rx.done) return 0;
    var c = fn(rx.value, ry.value);
    if(c!==0) return c;
  }
}
/**
 * Gives a set excluding values in collections.
 * @param {Set} x a set (updated)
 * @param {...Iterable} ys collections
 * @returns {Set} x
 */
function difference$(x, ...ys) {
  for(var c of ys)
    for(var v of c)
      x.delete(v);
  return x;
}
/**
 * Gives a set excluding values in all lists.
 * @param {Iterable} x a set
 * @param {...Iterable} ys lists
 * @returns {Set}
 */
function difference(x, ...ys) {
  return difference$(new Set(x), ...ys);
}
/**
 * Checks if all values satisfy a test.
 * @param {Set} x a set
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function every(x, fn, ths=null) {
  for(var v of x)
    if(!fn.call(ths, v, v, x)) return false;
  return true;
}
/**
 * Keeps values which satisfy a test.
 * @param {Set} x a set
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 * @returns {Set}
 */
function filter(x, fn, ths=null) {
  var a = new Set();
  for(var v of x)
    if(fn.call(ths, v, v, x)) a.add(v);
  return a;
}
/**
 * Keeps values which satisfy a test.
 * @param {Set} x a set (updated)
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 * @returns {Set} x
 */
function filter$(x, fn, ths=null) {
  for(var v of x)
    if(!fn.call(ths, v, v, x)) x.delete(v);
  return x;
}
/**
 * Gets a value which satisfies a test.
 * @param {Set} x a set
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 */
function find(x, fn, ths=null) {
  for(var v of x)
    if(fn.call(ths, v, v, x)) return x;
}
function tosets(cs) {
  var a = [];
  for(var c of cs)
    a.push(c instanceof Set? c : new Set(c));
  return a;
}
/**
 * Gives a set with values in all lists.
 * @param {Set} x a set (updated)
 * @param {...Iterable} ys lists
 * @returns {Set} x
 */
function intersection$(x, ...ys) {
  var ts = tosets(ys);
  x: for(var v of x) {
    for(var t of ts)
      if(!t.has(v)) { x.delete(v); continue x; }
  }
  return x;
}
/**
 * Gives a set with values in all lists.
 * @param {...Iterable} xs lists
 * @returns {Set}
 */
function intersection(...xs) {
  if(xs.length===0) return new Set();
  var a = new Set(xs.pop());
  return intersection$(a, ...xs);
}
/**
 * Checks if lists have no value in common.
 * @param {...Iterable} xs lists
 * @returns {boolean}
 */
function isDisjoint(...xs) {
  return intersection(...xs).size===0;
}
/**
 * Checks if two sets have the same values.
 * @param {Set} x a set
 * @param {Set} y another set
 * @returns {boolean}
 */
function isEqual(x, y) {
  return compare(x, y)===0;
}
/**
 * Checks if value is a set.
 * @param {*} x a value
 * @returns {boolean}
 */
function is(x) {
  return x instanceof Set;
}
/**
 * Checks if set is part of all lists.
 * @param {Set} x a set
 * @param {...Iterable} ys lists
 * @returns {boolean}
 */
function isSubset(x, ...ys) {
  return intersection(x, ...ys).size===x.size;
}
/**
 * Gives a set with values from all lists.
 * @param {Set} x a set (updated)
 * @param {...Iterable} ys lists
 * @returns {Set} x
 */
function union$(x, ...ys) {
  for (var y of ys)
    for(var v of y)
      x.add(v);
  return x;
}
/**
 * Gives a set with values from all lists.
 * @param {...Iterable} xs lists
 * @returns {Set}
 */
function union(...xs) {
  return union$(new Set(), ...xs);
}
/**
 * Checks if set is contained in all lists.
 * @param {Set} x a set
 * @param {...Iterable} ys lists
 * @returns {boolean}
 */
function isSuperset(x, ...ys) {
  return union(x, ...ys).size===x.size;
}
/**
 * Converts values through a mapping.
 * @param {Set} x a set
 * @param {function} fn map function (v, v, x)
 * @param {object?} ths this argument
 * @returns {Set}
 */
function map(x, fn, ths=null) {
  var a = new Set();
  for(var v of x)
    a.add(fn.call(ths, v, v, x));
  return a;
}
/**
 * Removes a value from a set.
 * @param {Set} x a set (updated)
 * @returns {Array} [value, updated]
 */
function pop(x) {
  x = new Set(x);
  for(var v of x) {
    x.delete(v);
    return [v, x];
  }
  return [undefined, x];
}
/**
 * Removes a value from a set.
 * @param {Set} x a set (updated)
 * @returns {Array} x
 */
function pop$(x) {
  for(var v of x) {
    x.delete(v);
    return v;
  }
}
/**
 * Simplifies a set to a value.
 * @param {Set} x a set
 * @param {function} fn reduce function (acc, v, v, x)
 * @param {*?} acc inital value
 * @returns {*}
 */
function reduce(x, fn, acc) {
  var al = arguments.length, i = -1;
  for(var v of x) {
    if(++i<0 && al<3) acc = v;
    else acc = fn(acc, v, v, x);
  }
  return acc;
}
/**
 * Checks if any value satisfies a test.
 * @param {Set} x a set
 * @param {function} fn test function (v, v, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function some(x, fn, ths=null) {
  for(var v of x)
    if(!fn.call(ths, v, v, x)) return false;
  return true;
}
/**
 * Gives a random number generator.
 * @param {number} r random seed 0->1
 * @returns {function}
 */
function random(r) {
  var a = Math.floor(r * (2 ** 31));
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}
/**
 * Rearranges values in arbitrary order.
 * @param {Array} x an array (updated)
 * @param {number?} n number of values (-1 => any)
 * @param {number?} r random seed 0->1
 * @returns {Array} x
 */
function permutation$(x, n=-1, r=Math.random()) {
  if(n>x.length) return x;
  var X = x.length, rnd = random(r);
  var n = n>=0? n:Math.floor((X+1)*rnd());
  for(var i=0; i<n; i++) {
    var j = i+Math.floor((X-i)*rnd());
    var t = x[i]; x[i] = x[j]; x[j] = t;
  }
  x.length = n;
  return x;
}
/**
 * Gives a random number generator.
 * @param {number} r random seed 0->1
 * @returns {function}
 */
function random25(r) {
  var a = Math.floor(r * (2 ** 31));
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}
const random26 = random25;

function subsetNum(x, n, r) {
  var a = permutation$(Array.from(x), n, r);
  return new Set(a);
}

function subsetAny(x, r) {
  var rnd = random26(r), a = new Set();
  for(var v of x)
    if(rnd()>=0.5) a.add(v);
  return a;
}

/**
 * Gives an arbitrary subset.
 * @param {Set} x a set
 * @param {number?} n number of values (-1 => any)
 * @param {number?} r random seed 0->1
 * @returns {Set}
 */
function subset(x, n=-1, r=Math.random()) {
  var X = x.size;
  if(n>=0) return n>X? null:subsetNum(x, n, r);
  return subsetAny(x, r);
}
/**
 * Lists all subsets of a set.
 * @param {Set} x a set
 * @param {number?} n number of values (-1 => any)
 * @returns {Iterable<Set>}
 */
function* subsets(x, n=-1) {
  var X = x.size;
  if(n>=X) { if(n==X) yield x; return; }
  if(n===0 || X===0) { yield new Set(); return; }
  var [a, y] = pop(x);
  yield* subsets(y, n);
  for(var s of subsets(y, n-1)) {
    s.add(a);
    yield s;
  }
}
/**
 * Gives a set with values in odd number of lists.
 * @param {...Iterable} xs lists
 * @returns {Set}
 */
function symmetricDifference(...xs) {
  var s = union(...xs);
  var ts = tosets(xs);
  for(var v of s) {
    var n = 0;
    for(var t of ts)
      if(t.has(v)) n++;
    if((n & 1)===0) s.delete(v);
  }
  return s;
}
exports.compare = compare;
exports.difference = difference;
exports.difference$ = difference$;
exports.every = every;
exports.filter = filter;
exports.filter$ = filter$;
exports.find = find;
exports.intersection = intersection;
exports.intersection$ = intersection$;
exports.isDisjoint = isDisjoint;
exports.isEqual = isEqual;
exports.is = is;
exports.isSubset = isSubset;
exports.isSuperset = isSuperset;
exports.map = map;
exports.pop = pop;
exports.pop$ = pop$;
exports.reduce = reduce;
exports.some = some;
exports.subset = subset;
exports.subsets = subsets;
exports.symmetricDifference = symmetricDifference;
exports.union = union;
exports.union$ = union$;
