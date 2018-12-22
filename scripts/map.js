function mapTo(set, fn, ths, z=new Set()) {
  for(var v of set)
    z.add(fn.call(ths, v, v, set));
  return z;
};
module.exports = mapTo;
