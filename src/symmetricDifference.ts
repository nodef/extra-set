import union from './union';
import tosets from './_tosets';

/**
 * Gives a set with values in odd no. of sets.
 * @param xs sets
 */
function symmetricDifference<T>(...xs: Iterable<T>[]): Set<T> {
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
export default symmetricDifference;
