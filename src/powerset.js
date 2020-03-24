/**
 * Lists all subsets of a set.
 * @param {Iterable} s a set
 * @returns {Iterable<Set>}
 */
function* powerset(s) {
  var a = Array.from(s);
  for(var incl=0, I=2**a.length; incl<I; incl++) {
    for(var v=new Set(), b=0, j=incl; j>0; b++, j>>=1)
      if(j & 1) v.add(a[b]);
    yield v;
  }
  return;
}
module.exports = powerset;
