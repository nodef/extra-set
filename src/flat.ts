import is from './is';

function flatTo(x: Iterable<any>, dep: number, a: Set<any>): Set<any> {
  for(var v of x) {
    if(dep!==0 && is(v)) flatTo(v, dep-1, a);
    else a.add(v);
  }
  return a;
}

/**
 * Flattens nested set to given depth.
 * @param x a nested set
 * @param dep maximum depth (-1)
 */
function flat(x: Iterable<any>, dep: number=-1): Set<any> {
  return flatTo(x, dep, new Set<any>());
}
export default flat;
