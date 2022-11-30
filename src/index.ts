/**
 * Compares two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -1, a=b: 0, a>b: 1
 */
 function cmp<T>(a: T, b: T): number {
  return a<b? -1:(a>b? 1:0);
}
export default cmp;


/**
 * Gives same value.
 * @param v a value
 * @returns v
 */
 function id<T>(v: T): T {
  return v;
}
export default id;


export type arrayMapFn<T, U> = (v: T, i: number, x: Iterable<T>) => U;
export type tillFn           = (dones: boolean[]) => boolean;
export type combineFn<T>     = (a: T, b: T) => T;
export type compareFn<T>     = (a: T, b: T) => number;
export type calledFn<T>      = (v: T, k: T, x: Iterable<T>) => void;
export type testFn<T>        = (v: T, k: T, x: Iterable<T>) => boolean;
export type mapFn<T, U>      = (v: T, k: T, x: Iterable<T>) => T|U;
export type reduceFn<T, U>   = (acc: U, v: T, k: T, x: Iterable<T>) => U;
export type getFn<T>         = () => T;




/**
 * Checks if value is set.
 * @param v value
 */
 function is<T>(v: any): v is Set<T> {
  return v instanceof Set;
}
export default is;

/**
 * Lists all values.
 * @param x a set
 */
 function* values<T>(x: Iterable<T>): IterableIterator<T> {
  yield* x;
}
export default values;



/**
 * Lists all value-value pairs.
 * @param x a set
 */
 function* entries<T>(x: Set<T>): IterableIterator<[T, T]> {
  yield* x.entries();
}
export default entries;




/**
 * Gets size of set.
 * @param x a set
 */
 function length<T>(x: Set<T>): number {
  return x.size;
}
export default length;


/**
 * Gets size of set.
 * @param x a set
 */
 function size<T>(x: Set<T>): number {
  return x.size;
}
export default size;


/**
 * Checks if set is empty.
 * @param x a set
 */
 function isEmpty<T>(x: Set<T>): boolean {
  return x.size===0;
}
export default isEmpty;


/**
 * Compares two sets.
 * @param x a set
 * @param y another set
 * @returns x=y: 0, otherwise: -ve/+ve
 */
 function compare<T>(x: Set<T>, y: Set<T>): number {
  for(var v of x)
    if(!y.has(v)) return 1;
  for(var v of y)
    if(!x.has(v)) return -1;
  return 0;
}
export default compare;


import compare from "./compare";

/**
 * Checks if two sets are equal.
 * @param x a set
 * @param y another set
 */
function isEqual<T>(x: Set<T>, y: Set<T>): boolean {
  return x.size===y.size && compare(x, y)===0;
}
export default isEqual;




/**
 * Adds value to set.
 * @param x a set
 * @param v value
 */
 function add<T>(x: Iterable<T>, v: T): Set<T> {
  return new Set(x).add(v);
}
export default add;


/**
 * Adds value to set.
 * @param x a set (updated)
 * @param v value
 * @returns x
 */
 function add$<T>(x: Set<T>, v: T): Set<T> {
  return x.add(v);
}
export default add$;


import remove$ from "./remove$";

/**
 * Deletes a value.
 * @param x a set
 * @param v value
 */
function remove<T>(x: Iterable<T>, v: T): Set<T> {
  return remove$(new Set(x), v);
}
export default remove;


/**
 * Deletes a value.
 * @param x a set (updated)
 * @param v value
 * @returns x
 */
 function remove$<T>(x: Set<T>, v: T): Set<T> {
  x.delete(v);
  return x;
}
export default remove$;




/**
 * Gets first value.
 * @param x a set
 * @param vd default value
 */
 function head<T>(x: Iterable<T>, vd?: T): T {
  for(var v of x)
    return v;
  return vd;
}
export default head;


import drop from "./drop";

/**
 * Gets set without the first value.
 * @param x a set
 */
function tail<T>(x: Iterable<T>): Set<T> {
  return drop(x, 1);
}
export default tail;


import drop from "./drop";

/**
 * Removes first value.
 * @param x a set
 */
function shift<T>(x: Iterable<T>): Set<T> {
  return drop(x, 1);
}
export default shift;


import drop$ from "./drop$";

/**
 * Removes first value.
 * @param x a set (updated)
 * @returns x
 */
function shift$<T>(x: Set<T>): Set<T> {
  return drop$(x, 1);
}
export default shift$;




/**
 * Keeps first n values only.
 * @param x a set
 * @param n number of values (1)
 */
 function take<T>(x: Iterable<T>, n: number=1): Set<T> {
  var i = 0, a = new Set<T>();
  for(var v of x) {
    if(i++>=n) break;
    a.add(v);
  }
  return a;
}
export default take;



/**
 * Keeps first n values only.
 * @param x a set (updated)
 * @param n number of values (1)
 * @returns x
 */
 function take$<T>(x: Set<T>, n: number=1): Set<T> {
  var i = 0;
  for(var v of x)
    if(i++>=n) x.delete(v);
  return x;
}
export default take$;


/**
 * Removes first n values.
 * @param x a set
 * @param n number of values (1)
 */
 function drop<T>(x: Iterable<T>, n: number=1): Set<T> {
  var i = 0, a = new Set<T>();
  for(var v of x)
    if(i++>=n) a.add(v);
  return a;
}
export default drop;


/**
 * Removes first n values.
 * @param x a set (updated)
 * @param n number of values (1)
 * @returns x
 */
 function drop$<T>(x: Set<T>, n: number=1): Set<T> {
  var i = 0;
  for(var v of x) {
    if(i++>=n) break;
    x.delete(v);
  }
  return x;
}
export default drop$;




import {from$} from "extra-array";
import type {arrayMapFn} from "./_types";

/**
 * Creates a set from values.
 * @param vs values
 * @param fm map function (v, i, x)
 */
function from<T, U=T>(vs: Iterable<T>, fm: arrayMapFn<T, T|U>=null): Set<T|U> {
  return new Set(fm? from$(vs).map(fm) : vs);
};
export default from;


/**
 * Creates set from iterable.
 * @param vs iterable (updatable if set)
 */
 function from$<T>(vs: Iterable<T>): Set<T> {
  return vs instanceof Set? vs : new Set(vs);
}
export default from$;


import concat$ from "./concat$";

/**
 * Appends values from sets.
 * @param xs sets
 */
function concat<T>(...xs: Iterable<T>[]): Set<T> {
  return concat$(new Set(), ...xs);
}
export default concat;


/**
 * Appends values from sets.
 * @param x a set (updated)
 * @param ys other sets
 * @returns x
 */
 function concat$<T>(x: Set<T>, ...ys: Iterable<T>[]): Set<T> {
  for(var y of ys) {
    for(var v of y)
      x.add(v);
  }
  return x;
}
export default concat$;



/**
 * Joins values together.
 * @param x a set
 * @param sep separator (,)
 */
 function join<T>(x: Iterable<T>, sep: string=","): string {
  return [...x].join(sep);
}
export default join;



import id from "./_id";
import is from "./is";
import type {mapFn, testFn} from "./_types";

function flatTo<T=any>(x: Iterable<T>, n: number, fm: mapFn<T, any>, ft: testFn<T>, a: Set<any>): Set<any> {
  for(var v of x) {
    var v1 = fm(v, v, x);
    if(n!==0 && ft(v1, v1, x)) flatTo(v1, n-1, fm, ft, a);
    else a.add(v1);
  }
  return a;
}

/**
 * Flattens nested set to given depth.
 * @param x a nested set
 * @param n maximum depth (-1 => all)
 * @param fm map function (v, v, x)
 * @param ft test function (v, v, x)
 */
function flat<T=any>(x: Iterable<T>, n: number=-1, fm: mapFn<T, any>=null, ft: testFn<T>=null): Set<any> {
  var fm = fm||id, ft = ft||is;
  return flatTo(x, n, fm, ft, new Set());
}
export default flat;


import id from "./_id";
import is from "./is";
import concat$ from "./concat$";
import type {mapFn, testFn} from "./_types";

/**
 * Flattens nested set, using map function.
 * @param x a nested set
 * @param fm map function (v, v, x)
 * @param ft test function (v, v, x)
 */
function flatMap<T=any>(x: Iterable<T>, fm: mapFn<T, any>=null, ft: testFn<T>=null): Set<any> {
  var fm = fm||id, ft = ft||is;
  var a = new Set();
  for(var v of x) {
    var v1 = fm(v, v, x);
    if(ft(v1, v1, x)) concat$(a, v1);
    else a.add(v1);
  }
  return a;
}
export default flatMap;


import {chunk as arrayChunk} from "extra-array";

/**
 * Breaks set into chunks of given size.
 * @param x a set
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T>(x: Set<T>, n: number=1, s: number=n): Set<T>[] {
  return arrayChunk([...x], n ,s).map(c => new Set(c));
}
export default chunk;




import type {calledFn} from "./_types";

/**
 * Calls a function for each value.
 * @param x a set
 * @param fc called function (v, v, x)
 */
function forEach<T>(x: Iterable<T>, fc: calledFn<T>): void {
  for(var v of x)
    fc(v, v, x);
}
export default forEach;






import id from "./_id";
import scanUntil from "./scanUntil";
import type {testFn} from "./_types";

/**
 * Checks if any value satisfies a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function some<T>(x: Iterable<T>, ft: testFn<T>=null): boolean {
  var ft = ft||id as testFn<T>;
  return scanUntil(x, ft)!==undefined;
}
export default some;



import id from "./_id";
import scanWhile from "./scanWhile";
import type {testFn} from "./_types";

/**
 * Checks if all values satisfy a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function every<T>(x: Iterable<T>, ft: testFn<T>=null) {
  var ft = ft||id as testFn<T>;
  return scanWhile(x, ft)===undefined;
}
export default every;





import type {mapFn} from "./_types";

/**
 * Updates values based on map function.
 * @param x a set
 * @param ft map function (v, v, x)
 */
function map<T, U=T>(x: Iterable<T>, ft: mapFn<T, T|U>): Set<T|U> {
  var a = new Set<T|U>();
  for(var v of x)
    a.add(ft(v, v, x));
  return a;
}
export default map;


import concat$ from "./concat$";
import type {mapFn} from "./_types";

/**
 * Updates values based on map function.
 * @param x a set (updated)
 * @param ft map function (v, v, x)
 * @returns x
 */
function map$<T>(x: Set<T>, ft: mapFn<T, T>): Set<T> {
  var vs = [];
  for(var v of x)
    vs.push(ft(v, v, x));
  x.clear();
  return concat$(x, vs);
}
export default map$;






import type {testFn} from "./_types";

/**
 * Keeps values which pass a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function filter<T>(x: Set<T>, ft: testFn<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(ft(v, v, x)) a.add(v);
  return a;
}
export default filter;


import type {testFn} from "./_types";

/**
 * Keeps values which pass a test.
 * @param x a set (updated)
 * @param ft test function (v, v, x)
 * @returns x
 */
function filter$<T>(x: Set<T>, ft: testFn<T>): Set<T> {
  for(var v of x)
    if(!ft(v, v, x)) x.delete(v);
  return x;
}
export default filter$;



/**
 * Gets set with given values.
 * @param x a set
 * @param vs values
 */
 function filterAt<T>(x: Set<T>, vs: T[]): Set<T> {
  var a = new Set<T>();
  for(var v of vs)
    if(x.has(v)) a.add(v);
  return a;
}
export default filterAt;


/**
 * Gets set with given values.
 * @param x a set (updated)
 * @param vs values
 * @returns x
 */
 function filterAt$<T>(x: Set<T>, vs: T[]): Set<T> {
  for(var v of x)
    if(!vs.includes(v)) x.delete(v);
  return x;
}
export default filterAt$;


import type {testFn} from "./_types";

/**
 * Discards values which pass a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function reject<T>(x: Iterable<T>, ft: testFn<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(!ft(v, v, x)) a.add(v);
  return a;
}
export default reject;



import type {testFn} from "./_types";

/**
 * Discards values which pass a test.
 * @param x a set (updated)
 * @param ft test function (v, v, x)
 * @returns x
 */
function reject$<T>(x: Set<T>, ft: testFn<T>): Set<T> {
  for(var v of x)
    if(ft(v, v, x)) x.delete(v);
  return x;
}
export default reject$;


import rejectAt$ from "./rejectAt$";

/**
 * Gets set without given values.
 * @param x a set
 * @param vs values
 */
function rejectAt<T>(x: Iterable<T>, vs: T[]): Set<T> {
  return rejectAt$(new Set(x), vs);
}
export default rejectAt;


/**
 * Gets set without given values.
 * @param x a set (updated)
 * @param vs values
 * @returns x
 */
 function rejectAt$<T>(x: Set<T>, vs: T[]): Set<T> {
  for(var v of vs)
    x.delete(v);
  return x;
}
export default rejectAt$;




import type {reduceFn} from "./_types";

/**
 * Reduces values to a single value.
 * @param x a set
 * @param fr reduce function (acc, v, v, x)
 * @param acc initial value
 */
function reduce<T, U=T>(x: Iterable<T>, fr: reduceFn<T, T|U>, acc?: T|U): T|U {
  var init = arguments.length <= 2;
  for(var v of x) {
    if(init) { acc = v; init = false; }
    else acc = fr(acc, v, v, x);
  }
  return acc;
}
export default reduce;







import range from "./range";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds smallest entry.
 * @param x a set
 * @param fc compare function (a, b)
 * @param fm map function (v, v, x)
 * @returns [value, value]
 */
function min<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): [T, T] {
  return range(x, fc, fm)[0];
}
export default min;


import range from "./range";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds largest entry.
 * @param x a set
 * @param fc compare function (a, b)
 * @param fm map function (v, v, x)
 * @returns [value, value]
 */
function max<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): [T, T] {
  return range(x, fc, fm)[1];
}
export default max;


import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds smallest and largest entries.
 * @param x a set
 * @param fc compare function (a, b)
 * @param fm map function (v, v, x)
 * @returns [smallest, largest]
 */
function range<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): [[T, T], [T, T]] {
  var fc = fc||cmp, fm = fm||id;
  var mu: T, mv: T|U;
  var nu: T, nv: T|U;
  var i = 0;
  for(var u of x) {
    var v = fm(u, u, x);
    if(i===0 || fc(v, mv)<0) { mu = u; mv = v; }
    if(i===0 || fc(v, nv)>0) { nu = u; nv = v; }
    i++;
  }
  return [[mu, mu], [nu, nu]];
}
export default range;


import type {testFn} from "./_types";

/**
 * Counts values which satisfy a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function count<T>(x: Iterable<T>, ft: testFn<T>): number {
  var a = 0;
  for(var v of x)
    if(ft(v, v, x)) a++;
  return a;
}
export default count;


import id from "./_id";
import type {mapFn} from "./_types";

/**
 * Counts occurrences of values.
 * @param x a set
 * @param fm map function (v, v, x)
 * @returns Map {value => count}
 */
function countAs<T, U=T>(x: Iterable<T>, fm: mapFn<T, T|U>): Map<T|U, number> {
  var fm = fm||id;
  var a = new Map();
  for(var v of x) {
    var v1 = fm(v, v, x);
    var n = a.get(v1)||0;
    a.set(v1, n+1);
  }
  return a;
}
export default countAs;


import type {testFn} from "./_types";

/**
 * Segregates values by test result.
 * @param x a set
 * @param ft test function (v, v, x)
 * @returns [satisfies, doesnt]
 */
function partition<T>(x: Iterable<T>, ft: testFn<T>): [Set<T>, Set<T>] {
  var t = new Set<T>();
  var f = new Set<T>();
  for(var v of x) {
    if(ft(v, v, x)) t.add(v);
    else f.add(v);
  }
  return [t, f];
}
export default partition;


import id from "./_id";
import type {mapFn} from "./_types";

/**
 * Segregates values by similarity.
 * @param x a set
 * @param fm map function (v, v, x)
 */
function partitionAs<T, U=T>(x: Iterable<T>, fm: mapFn<T, T|U>): Map<T|U, Set<T>> {
  var fm = fm||id;
  var a = new Map();
  for(var v of x) {
    var v1 = fm(v, v, x);
    if(!a.has(v1)) a.set(v1, new Set());
    a.get(v1).add(v);
  }
  return a;
}
export default partitionAs;







import concat$ from "./concat$";

/**
 * Gives values present in any set.
 * @param x a set
 * @param y another set
 */
function union<T>(x: Iterable<T>, y: Iterable<T>): Set<T> {
  return concat$(new Set(), x, y);
}
export default union;


import concat$ from "./concat$";

/**
 * Gives values present in any set.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
function union$<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  return concat$(x, y);
}
export default union$;


/**
 * Gives values present in both sets.
 * @param x a set
 * @param y another set
 */
 function intersection<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  var a = new Set<T>();
  for(var v of y)
    if(x.has(v)) a.add(v);
  return a;
}
export default intersection;


/**
 * Gives values present in both sets.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
 function intersection$<T>(x: Set<T>, y: Set<T>): Set<T> {
  for(var v of x)
    if(!y.has(v)) x.delete(v);
  return x;
}
export default intersection$;


import difference$ from "./difference$";

/**
 * Gives values of set not present in others.
 * @param x a set
 * @param y another set
 */
function difference<T>(x: Set<T>, y: Set<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(!y.has(v)) a.add(v);
  return a;
}
export default difference;


/**
 * Gives values of set not present in another.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
 function difference$<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  for(var v of y)
    x.delete(v);
  return x;
}
export default difference$;


/**
 * Gives values not present in both sets.
 * @param x a set
 * @param y another set
 */
 function symmetricDifference<T>(x: Set<T>, y: Set<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(!y.has(v)) a.add(v);
  for(var v of y)
    if(!x.has(v)) a.add(v);
  return a;
}
export default symmetricDifference;


/**
 * Gives values not present in both sets.
 * @param x a set (updated)
 * @param y another set
 * @returns x
 */
 function symmetricDifference$<T>(x: Set<T>, y: Iterable<T>): Set<T> {
  for(var v of y) {
    if(x.has(v)) x.delete(v);
    else x.add(v);
  }
  return x;
}
export default symmetricDifference$;







import id from "./_id";
import type {mapFn} from "./_types";

/**
 * Lists cartesian product of sets.
 * @param xs sets
 * @param fn map function (vs, vs)
 */
function* cartesianProduct<T, U=Set<T>>(xs: Set<T>[], fn: mapFn<Set<T>, Set<T>|U>=null): IterableIterator<Set<T>|U> {
  var fn = fn||id;
  var XS  = xs.length;
  var vss = xs.map(x => [...x]);
  var ls = vss.map(vs => vs.length);
  var is = vss.map(vs => 0);
  while(true) {
    var a = new Set<T>();
    for(var n=0; n<XS; n++) {
      var i  = is[n];
      var vs = vss[n], v = vs[i];
      a.add(v);
    }
    yield fn(a, a, null);
    for(var r=XS-1; r>=0; r--) {
      is[r]++;
      if(is[r]<ls[r]) break;
      is[r] = 0;
    }
    if(r<0) break;
  }
}
export default cartesianProduct;



/**
 * Checks if sets have no common values.
 * @param x a set
 * @param y another set
 */
 function isDisjoint<T>(x: Set<T>, y: Iterable<T>): boolean {
  for(var v of y)
    if(x.has(v)) return false;
  return true;
}
export default isDisjoint;






import {value as arrayValue} from "extra-array";

/**
 * Picks an arbitrary value.
 * @param x a set
 * @param r random seed 0->1
 */
function value<T>(x: Iterable<T>, r: number=Math.random()): T {
  return arrayValue([...x], r);
}
export default value;




import {value} from "extra-array";

/**
 * Picks an arbitrary entry.
 * @param x a set
 * @param r random seed 0->1
 */
function entry<T>(x: Set<T>, r: number=Math.random()): [T, T] {
  return value([...x.entries()], r);
}
export default entry;



import {subsequence} from "extra-array";

/**
 * Picks an arbitrary subset.
 * @param x a set
 * @param n number of values (-1 => any)
 * @param r random seed 0->1
 */
function subset<T>(x: Iterable<T>, n: number=-1, r: number=Math.random()): Set<T> {
  var vs = subsequence([...x], n, r);
  return new Set(vs);
}
export default subset;




import {subsequences} from "extra-array";

/**
 * Lists all possible subsets.
 * @param x a set
 * @param n number of values (-1 => any)
 */
function* subsets<T>(x: Iterable<T>, n: number=-1): IterableIterator<Set<T>> {
  for(var vs of subsequences([...x], n))
    yield new Set(vs);
}
export default subsets;


/**
 * Checks if set has a value.
 * @param x a set
 * @param v value?
 */
 function has<T>(x: Set<T>, v: T): boolean {
  return x.has(v);
}
export default has;



/**
 * Checks if set has a subset.
 * @param x a set
 * @param y subset?
 */
 function hasSubset<T>(x: Set<T>, y: Iterable<T>): boolean {
  for(var v of y)
    if(!x.has(v)) return false;
  return true;
}
export default hasSubset;



import type {testFn} from "./_types";

/**
 * Finds a value passing s test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function find<T>(x: Iterable<T>, ft: testFn<T>): T {
  for(var v of x)
    if(ft(v, v, x)) return v;
}
export default find;


import type {testFn} from "./_types";

/**
 * Finds values passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function findAll<T>(x: Iterable<T>, ft: testFn<T>): T[] {
  var a = [];
  for(var v of x)
    if(ft(v, v, x)) a.push(v);
  return a;
}
export default findAll;



import find from "./find";
import type {testFn} from "./_types";

/**
 * Finds a value passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function search<T>(x: Iterable<T>, ft: testFn<T>): T {
  return find(x, ft);
}
export default search;




import findAll from "./findAll";
import type {testFn} from "./_types";

/**
 * Finds values passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function searchAll<T>(x: Iterable<T>, ft: testFn<T>): T[] {
  return findAll(x, ft);
}
export default searchAll;




import type {testFn} from "./_types";

/**
 * Finds first value not passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function scanWhile<T>(x: Iterable<T>, ft: testFn<T>): T {
  for(var v of x)
    if(!ft(v, v, x)) return v;
}
export default scanWhile;


import find from "./find";
import type {testFn} from "./_types";

/**
 * Finds first value passing a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function scanUntil<T>(x: Iterable<T>, ft: testFn<T>): T {
  return find(x, ft);
}
export default scanUntil;
