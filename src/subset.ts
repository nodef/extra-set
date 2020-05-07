import arrayPermutation$ from '@extra-array/permutation-update';
import random from './_random';

function subsetNum<T>(x: Iterable<T>, n: number, r: number): Set<T> {
  var a = arrayPermutation$(Array.from(x), n, r);
  return new Set<T>(a);
}

function subsetAny<T>(x: Iterable<T>, r: number): Set<T> {
  var rnd = random(r), a = new Set<T>();
  for(var v of x)
    if(rnd()>=0.5) a.add(v);
  return a;
}

/**
 * Gives an arbitrary subset.
 * @param x a set
 * @param n number of values (-1 => any)
 * @param r random seed 0->1
 */
function subset<T>(x: Set<T>, n: number=-1, r: number=Math.random()): Set<T> {
  var X = x.size;
  if(n>=0) return n>X? null:subsetNum(x, n, r);
  return subsetAny(x, r);
}
export default subset;
