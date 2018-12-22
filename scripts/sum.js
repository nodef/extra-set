function sum(set) {
  var z = 0;
  for(var v of set)
    z += v;
  return z;
};
module.exports = sum;
