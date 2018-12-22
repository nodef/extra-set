function shift(set) {
  var z;
  for(var v of set)
  { z = v; break; }
  set.delete(z);
  return z;
};
module.exports = shift;
