function same(set, fn, ths) {
  for(var v of set)
    if(!fn.call(ths, v, v, set)) set.delete(v);
  return set;
};
function filterTo(set, fn, ths, z=new Set()) {
  if(z===set) return same(set, fn, ths);
  for(var v of set)
    if(fn.call(ths, v, v, set)) z.add(v);
  return z;
};
module.exports = filterTo;
