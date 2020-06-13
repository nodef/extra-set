import id from './_id';
import concat from './concat';
import {some} from 'extra-iterable';
import type {mapFn, tillFn} from './_types';

/**
 * Combines values from sets.
 * @param xs sets
 * @param fm map function (vs, vs)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function zip<T, U=T[]>(xs: Set<T>[], fm: mapFn<T[], T[]|U>=null, ft: tillFn=null, vd?: T): Set<T[]|U> {
  var fm = fm||id, ft = ft||some as tillFn;
  var us = concat(...xs), a = new Set<T[]|U>();
  for(var u of us) {
    var ds = xs.map(x => !x.has(u));
    if(ft(ds)) break;
    var vs = xs.map(x => !x.has(u)? vd : u);
    a.add(fm(vs, vs, null));
  }
  return a;
}
export default zip;
