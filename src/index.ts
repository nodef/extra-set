import {
  IDENTITY,
  COMPARE,
} from "extra-function";
import {
  chunk             as arrayChunk,
  subsequences      as arraySubsequences,
  randomValue       as arrayRandomValue,
  randomSubsequence as arrayRandomSubsequence,
} from "extra-array";
import {
  MapFunction as IterableMapFunction,
} from "extra-iterable";



// TYPES
// =====

/**
 * Handle reading of a single value.
 * @returns value
 */
export type ReadFunction<T> = () => T;


/**
 * Handle combining of two values.
 * @param a a value
 * @param b another value
 * @returns combined value
 */
export type CombineFunction<T> = (a: T, b: T) => T;


/**
 * Handle comparison of two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
export type CompareFunction<T> = (a: T, b: T) => number;


/**
 * Handle processing of values in a set.
 * @param v value in set
 * @param k key of value in set (= value)
 * @param x set containing the value
 */
export type ProcessFunction<T> = (v: T, k: T, x: Set<T>) => void;


/**
 * Handle selection of values in a set.
 * @param v value in set
 * @param k key of value in set (= value)
 * @param x set containing the value
 * @returns selected?
 */
export type TestFunction<T> = (v: T, k: T, x: Set<T>) => boolean;


/**
 * Handle transformation of a value to another.
 * @param v value in set
 * @param k key of value in set (= value)
 * @param x set containing the value
 * @returns transformed value
 */
export type MapFunction<T, U> = (v: T, k: T, x: Set<T>) => U;


/**
 * Handle reduction of multiple values into a single value.
 * @param acc accumulator (temporary result)
 * @param v value in set
 * @param k key of value in set (= value)
 * @param x set containing the value
 * @returns reduced value
 */
export type ReduceFunction<T, U> = (acc: U, v: T, k: T, x: Set<T>) => U;


/**
 * Handle ending of a combined set.
 * @param dones iᵗʰ set done?
 * @returns combined set done?
 */
export type EndFunction = (dones: boolean[]) => boolean;




// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is a set.
 * @param v a value
 * @returns v is a set?
 */
export function is(v: any): v is Set<any> {
  return v instanceof Set;
}


/**
 * List all values.
 * @param x a set
 * @returns v₀, v₁, ... | vᵢ ∈ x
 */
export function values<T>(x: Set<T>): IterableIterator<T> {
  return x.values();
}
export {values as keys};


/**
 * List all value-value pairs.
 * @param x a set
 * @returns [v₀, v₀], [v₁, v₁], ... | vᵢ ∈ x
 */
export function entries<T>(x: Set<T>): IterableIterator<[T, T]> {
  return x.entries();
}




// GENERATE
// --------

/**
 * Convert an iterable to set.
 * @param x an iterable
 * @param fm map function (v, i, x)
 * @returns x as set
 */
export function from<T, U=T>(x: Iterable<T>, fm: IterableMapFunction<T, T|U> | null=null): Set<T|U> {
  if (!fm) return new Set(x);
  var a = new Set<T|U>(), i = -1;
  for (var v of x)
    a.add(fm(v, ++i, x));
  return a;
}


/**
 * Convert an iterable to set.
 * @param x an iterable (updatable if set!)
 * @returns x as set
 */
export function from$<T>(x: Iterable<T>): Set<T> {
  return x instanceof Set? x : new Set(x);
}




// COMPARE
// -------

/**
 * Compare two sets.
 * @param x a set
 * @param y another set
 * @returns x=y: 0, otherwise: -ve/+ve
 */
export function compare<T>(x: Set<T>, y: Set<T>): number {
  for (var v of x)
    if (!y.has(v)) return 1;
  for (var v of y)
    if (!x.has(v)) return -1;
  return 0;
}


/**
 * Check if two sets are equal.
 * @param x a set
 * @param y another set
 * @returns x = y?
 */
export function isEqual<T>(x: Set<T>, y: Set<T>): boolean {
  return x.size===y.size && compare(x, y)===0;
}




// SIZE
// ----

/**
 * Find the size of a set.
 * @param x a set
 * @returns |x|
 */
export function size<T>(x: Set<T>): number {
  return x.size;
}
export {size as length};


/**
 * Check if a set is empty.
 * @param x a set
 * @returns |x| = 0?
 */
export function isEmpty<T>(x: Set<T>): boolean {
  return x.size===0;
}




// ADD/REMOVE
// ----------

/**
 * Add a value to set.
 * @param x a set
 * @param v value
 * @returns x ∪ \{v\}
 */
export function add<T>(x: Set<T>, v: T): Set<T> {
  return new Set(x).add(v);
}


/**
 * Add a value to set.
 * @param x a set (updated)
 * @param v value
 * @returns x = x ∪ \{v\}
 */
export function add$<T>(x: Set<T>, v: T): Set<T> {
  return x.add(v);
}


/**
 * Delete a value from set.
 * @param x a set
 * @param v value
 * @returns x \\ \{v\}
 */
export function remove<T>(x: Set<T>, v: T): Set<T> {
  return remove$(new Set(x), v);
}


/**
 * Delete a value from set.
 * @param x a set (updated)
 * @param v value
 * @returns x = x \\ \{v\}
 */
export function remove$<T>(x: Set<T>, v: T): Set<T> {
  x.delete(v);
  return x;
}




// PROPERTY
// --------

/**
 * Count values which satisfy a test.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns Σtᵢ | tᵢ = 1 if ft(vᵢ) else 0; vᵢ ∈ x
 */
export function count<T>(x: Set<T>, ft: TestFunction<T>): number {
  var a = 0;
  for (var v of x)
    if (ft(v, v, x)) ++a;
  return a;
}


/**
 * Count occurrences of values.
 * @param x a set
 * @param fm map function (v, v, x)
 * @returns Map \{value ⇒ count\}
 */
export function countAs<T, U=T>(x: Set<T>, fm: MapFunction<T, T|U>): Map<T|U, number> {
  var fm = fm || IDENTITY;
  var a  = new Map();
  for (var v of x) {
    var w = fm(v, v, x);
    var n = a.get(w) || 0;
    a.set(w, n+1);
  }
  return a;
}


/**
 * Find smallest value.
 * @param x a set
 * @param fc compare function (a, b)
 * @param fm map function (v, v, x)
 * @returns v | v ≤ vᵢ; vᵢ ∈ x
 */
export function min<T, U=T>(x: Set<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T {
  return range(x, fc, fm)[0];
}


/**
 * Find largest value.
 * @param x a set
 * @param fc compare function (a, b)
 * @param fm map function (v, v, x)
 * @returns v | v ≥ vᵢ; vᵢ ∈ x
 */
export function max<T, U=T>(x: Set<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T {
  return range(x, fc, fm)[1];
}


/**
 * Find smallest and largest entries.
 * @param x a set
 * @param fc compare function (a, b)
 * @param fm map function (v, v, x)
 * @returns [min_value, max_value]
 */
export function range<T, U=T>(x: Set<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): [T, T] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var mu: T, mv: T|U;
  var nu: T, nv: T|U;
  var i = 0;
  for (var u of x) {
    var v = fm(u, u, x);
    if(i===0 || fc(v, mv)<0) { mu = u; mv = v; }
    if(i===0 || fc(v, nv)>0) { nu = u; nv = v; }
    i++;
  }
  return [mu, nu];
}




// PART
// ----

/**
 * Get first value from set (default order).
 * @param x a set
 * @param vd default value
 * @returns v₀ if x ≠ Φ else vd | v₀ ∈ x
 */
export function head<T>(x: Set<T>, vd?: T): T | undefined {
  for (var v of x)
    return v;
  return vd;
}


/**
 * Get a set without its first value (default order).
 * @param x a set
 * @returns x \\ \{v₀\} if x ≠ Φ else x | v₀ ∈ x
 */
export function tail<T>(x: Set<T>): Set<T> {
  return drop(x, 1);
}


/**
 * Keep first n values only (default order).
 * @param x a set
 * @param n number of values [1]
 * @returns \{v₀, v₁, ...\} | vᵢ ∈ x and |\{v₀, v₁, ...\}| ≤ n
 */
export function take<T>(x: Iterable<T>, n: number=1): Set<T> {
  var a = new Set<T>(), i = -1;
  for (var v of x) {
    if (++i>=n) break;
    a.add(v);
  }
  return a;
}


/**
 * Keep first n values only (default order).
 * @param x a set (updated)
 * @param n number of values [1]
 * @returns x = \{v₀, v₁, ...\} | vᵢ ∈ x and |\{v₀, v₁, ...\}| ≤ n
 */
export function take$<T>(x: Set<T>, n: number=1): Set<T> {
  var i = -1;
  for (var v of x)
    if (++i>=n) x.delete(v);
  return x;
}


/**
 * Remove first n values (default order).
 * @param x a set
 * @param n number of values [1]
 * @returns \{vₙ, vₙ₊₁, ...\} | vᵢ ∈ x and |\{vₙ, vₙ₊₁, ...\}| ≤ max(|x| - n, 0)
 */
export function drop<T>(x: Set<T>, n: number=1): Set<T> {
  var a = new Set<T>(), i = -1;
  for (var v of x)
    if (++i>=n) a.add(v);
  return a;
}


/**
 * Remove first n values (default order).
 * @param x a set (updated)
 * @param n number of values [1]
 * @returns x = \{vₙ, vₙ₊₁, ...\} | vᵢ ∈ x and |\{vₙ, vₙ₊₁, ...\}| ≤ max(|x| - n, 0)
 */
export function drop$<T>(x: Set<T>, n: number=1): Set<T> {
  var i = -1;
  for (var v of x) {
    if (++i>=n) break;
    x.delete(v);
  }
  return x;
}




// ARRANGEMENTS
// ------------

/**
 * List all possible subsets.
 * @param x a set
 * @param n number of values [-1 ⇒ any]
 * @returns elements selected by bit from 0..2^|x| if n<0; only of length n otherwise
 */
export function* subsets<T>(x: Set<T>, n: number=-1): IterableIterator<Set<T>> {
  for (var vs of arraySubsequences([...x], n))
    yield new Set(vs);
}


/**
 * Pick an arbitrary value.
 * @param x a set
 * @param fr random number generator ([0, 1))
 * @returns vᵢ | vᵢ ∈ x
 */
export function randomValue<T>(x: Set<T>, fr: ReadFunction<number>=Math.random): T {
  return arrayRandomValue([...x], fr);
}
export {randomValue as randomKey};
export {randomValue as value};
export {randomValue as key};


/**
 * Pick an arbitrary entry.
 * @param x a set
 * @param fr random number generator ([0, 1))
 * @returns [vᵢ, vᵢ] | vᵢ ∈ x
 */
export function randomEntry<T>(x: Set<T>, fr: ReadFunction<number>=Math.random): [T, T] {
  return arrayRandomValue([...x.entries()], fr);
}
export {randomEntry as entry};


/**
 * Pick an arbitrary subset.
 * @param x a set
 * @param n number of values [-1 ⇒ any]
 * @param fr random number generator ([0, 1))
 * @returns \{vᵢ, vⱼ, ...\} | vᵢ, vⱼ, ... ∈ x; |\{vᵢ, vⱼ, ...\}| = |x| if n<0 else n
 */
export function randomSubset<T>(x: Set<T>, n: number=-1, fr: ReadFunction<number>=Math.random): Set<T> {
  var vs = arrayRandomSubsequence([...x], n, fr);
  return new Set(vs);
}


/**
 * Checks if set has a subset.
 * @param x a set
 * @param y search subset
 * @returns y ⊆ x?
 */
export function hasSubset<T>(x: Set<T>, y: Set<T>): boolean {
  for (var v of y)
    if (!x.has(v)) return false;
  return true;
}




// FIND
// ----

/**
 * Check if set has a value.
 * @param x a set
 * @param v search value
 * @returns v ∈ x?
 */
export function has<T>(x: Set<T>, v: T): boolean {
  return x.has(v);
}


/**
 * Find first value passing a test (default order).
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns first v | ft(v) = true; v ∈ x
 */
export function find<T>(x: Set<T>, ft: TestFunction<T>): T {
  for (var v of x)
    if (ft(v, v, x)) return v;
}
export {find as search};


/**
 * Find all values passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns [v₀, v₁, ...] | ft(vᵢ) = true; vᵢ ∈ x
 */
export function findAll<T>(x: Set<T>, ft: TestFunction<T>): T[] {
  var a = [];
  for (var v of x)
    if (ft(v, v, x)) a.push(v);
  return a;
}
export {findAll as searchAll};




// FUNCTIONAL
// ----------

/**
 * Call a function for each value.
 * @param x a set
 * @param fp process function (v, v, x)
 */
export function forEach<T>(x: Set<T>, fp: ProcessFunction<T>): void {
  for (var v of x)
    fp(v, v, x);
}


/**
 * Check if any value satisfies a test.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns true if ft(vᵢ) = true for some vᵢ ∈ x
 */
export function some<T>(x: Set<T>, ft: TestFunction<T> | null=null): boolean {
  var ft = ft || IDENTITY as TestFunction<T>;
  for (var v of x)
    if (ft(v, v, x)) return true;
  return false;
}


/**
 * Check if all values satisfy a test.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns true if ft(vᵢ) = true for all vᵢ ∈ x
 */
export function every<T>(x: Set<T>, ft: TestFunction<T> | null=null): boolean {
  var ft = ft || IDENTITY as TestFunction<T>;
  for (var v of x)
    if (!ft(v, v, x)) return false;
  return true;
}


/**
 * Transform values of a set.
 * @param x a set
 * @param fm map function (v, v, x)
 * @returns \{fm(v₀), fm(v₁), ...\} | vᵢ ∈ x
 */
export function map<T, U=T>(x: Set<T>, fm: MapFunction<T, T|U>): Set<T|U> {
  var a = new Set<T|U>();
  for (var v of x)
    a.add(fm(v, v, x));
  return a;
}


/**
 * Transform values of a set.
 * @param x a set (updated)
 * @param fm map function (v, v, x)
 * @returns x = \{fm(v₀), fm(v₁), ...\} | vᵢ ∈ x
 */
export function map$<T>(x: Set<T>, fm: MapFunction<T, T>): Set<T> {
  var vs: T[] = [];
  for (var v of x)
    vs.push(fm(v, v, x));
  x.clear();
  return concat$(x, vs);
}


/**
 * Reduce values of set to a single value.
 * @param x a set
 * @param fr reduce function (acc, v, v, x)
 * @param acc initial value
 * @returns fr(fr(acc, v₀), v₁)... | fr(acc, v₀) = v₀ if acc not given
 */
export function reduce<T, U=T>(x: Set<T>, fr: ReduceFunction<T, T|U>, acc?: T|U): T|U {
  var init = arguments.length <= 2;
  for (var v of x) {
    if (init) { acc = v; init = false; }
    else acc = fr(acc, v, v, x);
  }
  return acc;
}


/**
 * Keep values which pass a test.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns \{v₀, v₁, ...\} | ft(vᵢ) = true; vᵢ ∈ x
 */
export function filter<T>(x: Set<T>, ft: TestFunction<T>): Set<T> {
  var a = new Set<T>();
  for (var v of x)
    if (ft(v, v, x)) a.add(v);
  return a;
}


/**
 * Keep values which pass a test.
 * @param x a set (updated)
 * @param ft test function (v, v, x)
 * @returns x = \{v₀, v₁, ...\} | ft(vᵢ) = true; vᵢ ∈ x
 */
export function filter$<T>(x: Set<T>, ft: TestFunction<T>): Set<T> {
  for (var v of x)
    if (!ft(v, v, x)) x.delete(v);
  return x;
}


/**
 * Discard values which pass a test.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns \{v₀, v₁, ...\} | ft(vᵢ) = false; vᵢ ∈ x
 */
export function reject<T>(x: Set<T>, ft: TestFunction<T>): Set<T> {
  var a = new Set<T>();
  for (var v of x)
    if (!ft(v, v, x)) a.add(v);
  return a;
}


/**
 * Discard values which pass a test.
 * @param x a set (updated)
 * @param ft test function (v, v, x)
 * @returns x = \{v₀, v₁, ...\} | ft(vᵢ) = false; vᵢ ∈ x
 */
export function reject$<T>(x: Set<T>, ft: TestFunction<T>): Set<T> {
  for (var v of x)
    if (ft(v, v, x)) x.delete(v);
  return x;
}


/**
 * Flatten nested set to given depth.
 * @param x a nested set
 * @param n maximum depth [-1 ⇒ all]
 * @param fm map function (v, v, x)
 * @param ft flatten test function (v, v, x) [is]
 * @returns flat set
 */
export function flat<T=any>(x: Set<T>, n: number=-1, fm: MapFunction<T, any> | null=null, ft: TestFunction<T> | null=null): Set<any> {
  var fm = fm || IDENTITY;
  var ft = ft || is;
  return flatTo$(new Set(), x, n, fm, ft);
}

function flatTo$<T=any>(a: Set<any>, x: Set<T>, n: number, fm: MapFunction<T, any>, ft: TestFunction<T>): Set<any> {
  for (var v of x) {
    var v1 = fm(v, v, x);
    if (n!==0 && ft(v1, v1, x)) flatTo$(a, v1, n-1, fm, ft);
    else a.add(v1);
  }
  return a;
}


/**
 * Flatten nested set, based on map function.
 * @param x a nested set
 * @param fm map function (v, v, x)
 * @param ft flatten test function (v, v, x) [is]
 * @returns flat iterable
 */
export function flatMap<T=any>(x: Set<T>, fm: MapFunction<T, any> | null=null, ft: TestFunction<T> | null=null): Set<any> {
  var fm = fm || IDENTITY;
  var ft = ft || is;
  var a  = new Set();
  for (var v of x) {
    var w = fm(v, v, x);
    if (ft(w, w, x)) concat$(a, w);
    else a.add(w);
  }
  return a;
}




// MANIPULATION
// ------------

/**
 * Segregate values by test result.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns [satisfies, doesnt]
 */
export function partition<T>(x: Set<T>, ft: TestFunction<T>): [Set<T>, Set<T>] {
  var t = new Set<T>();
  var f = new Set<T>();
  for (var v of x) {
    if (ft(v, v, x)) t.add(v);
    else f.add(v);
  }
  return [t, f];
}


/**
 * Segregates values by similarity.
 * @param x a set
 * @param fm map function (v, v, x)
 * @returns Map \{key ⇒ values\}
 */
export function partitionAs<T, U=T>(x: Set<T>, fm: MapFunction<T, T|U>): Map<T|U, Set<T>> {
  var fm = fm || IDENTITY;
  var a  = new Map();
  for (var v of x) {
    var v1 = fm(v, v, x);
    if (!a.has(v1)) a.set(v1, new Set());
    a.get(v1).add(v);
  }
  return a;
}


/**
 * Break set into chunks of given size.
 * @param x a set
 * @param n chunk size [1]
 * @param s chunk step [n]
 * @returns [x[0..n], x[s..s+n], x[2s..2s+n], ...]
 */
export function chunk<T>(x: Set<T>, n: number=1, s: number=n): Set<T>[] {
  return arrayChunk([...x], n ,s).map(c => new Set(c));
}




// COMBINE
// -------

/**
 * Append values from sets.
 * @param xs sets
 * @returns x₀ ∪ x₁ ∪ ... | [x₀, x₁, ...] = xs
 */
export function concat<T>(...xs: Set<T>[]): Set<T> {
  return concat$(new Set(), ...xs);
}


/**
 * Append values from sets.
 * @param x a set (updated)
 * @param ys other sets
 * @returns x = x ∪ y₀ ∪ y₁ ∪ ... | [y₀, y₁, ...] = ys
 */
export function concat$<T>(x: Set<T>, ...ys: Iterable<T>[]): Set<T> {
  for (var y of ys) {
    for (var v of y)
      x.add(v);
  }
  return x;
}


/**
 * Join values together into a string.
 * @param x a set
 * @param sep separator [,]
 * @returns "$\{v₀\}$\{sep\}$\{v₁\}..." | vᵢ ∈ x
 */
export function join<T>(x: Set<T>, sep: string=","): string {
  return [...x].join(sep);
}




// SET OPERATIONS
// --------------

/**
 * Check if sets have no value in common.
 * @param x a set
 * @param y another set
 * @returns x ∩ y = Φ?
 */
export function isDisjoint<T>(x: Set<T>, y: Iterable<T>): boolean {
  for (var v of y)
    if (x.has(v)) return false;
  return true;
}


/**
 * Give values present in any set.
 * @param x a set
 * @param y another set
 * @returns x ∪ y = \{v | v ∈ x or v ∈ y\}
 */
export function union<T>(x: Iterable<T>, y: Iterable<T>): Set<T> {
  return concat$(new Set(), x, y);
}


/**
 * Give values present in any set.
 * @param x a set (updated)
 * @param y another set
 * @returns x = x ∪ y = \{v | v ∈ x or v ∈ y\}
 */
export function union$<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  return concat$(x, y);
}


/**
 * Give values present in both sets.
 * @param x a set
 * @param y another set
 * @returns x ∩ y = \{v | v ∈ x, v ∈ y\}
 */
export function intersection<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  var a = new Set<T>();
  for (var v of y)
    if (x.has(v)) a.add(v);
  return a;
}


/**
 * Give values present in both sets.
 * @param x a set (updated)
 * @param y another set
 * @returns x = x ∩ y = \{v | v ∈ x, v ∈ y\}
 */
export function intersection$<T>(x: Set<T>, y: Set<T>): Set<T> {
  for (var v of x)
    if (!y.has(v)) x.delete(v);
  return x;
}


/**
 * Give values not present in another set.
 * @param x a set
 * @param y another set
 * @returns x - y = \{v | v ∈ x, v ∉ y\}
 */
export function difference<T>(x: Set<T>, y: Set<T>): Set<T> {
  var a = new Set<T>();
  for (var v of x)
    if (!y.has(v)) a.add(v);
  return a;
}


/**
 * Give values not present in another set.
 * @param x a set (updated)
 * @param y another set
 * @returns x = x - y = \{v | v ∈ x, v ∉ y\}
 */
export function difference$<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  for (var v of y)
    x.delete(v);
  return x;
}


/**
 * Give values not present in both sets.
 * @param x a set
 * @param y another set
 * @returns x-y ∪ y-x
 */
export function symmetricDifference<T>(x: Set<T>, y: Set<T>): Set<T> {
  var a = new Set<T>();
  for (var v of x)
    if (!y.has(v)) a.add(v);
  for (var v of y)
    if (!x.has(v)) a.add(v);
  return a;
}


/**
 * Give values not present in both sets.
 * @param x a set (updated)
 * @param y another set
 * @returns x = x-y ∪ y-x
 */
export function symmetricDifference$<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  for (var v of y) {
    if (x.has(v)) x.delete(v);
    else x.add(v);
  }
  return x;
}


/**
 * List cartesian product of sets.
 * @param xs sets
 * @param fm map function (vs, vs)
 * @returns x₀ × x₁ × ... = \{\{v₀, v₁, ...\} | v₀ ∈ x₀, v₁ ∈ x₁, ...]\}
 */
export function* cartesianProduct<T, U=Set<T>>(xs: Set<T>[], fm: MapFunction<Set<T>, Set<T>|U> | null=null): IterableIterator<Set<T>|U> {
  var fm = fm || IDENTITY;
  var XS = xs.length;
  var ys = xs.map(x => [...x]);
  var ls = ys.map(vs => vs.length);
  var is = ys.map(vs => 0);
  while (true) {
    var a = new Set<T>();
    for (var n=0; n<XS; ++n) {
      var i  = is[n];
      var vs = ys[n], v = vs[i];
      a.add(v);
    }
    yield fm(a, a, null);
    for (var r=XS-1; r>=0; --r) {
      if (++is[r] < ls[r]) break;
      is[r] = 0;
    }
    if (r<0) break;
  }
}
export default cartesianProduct;
