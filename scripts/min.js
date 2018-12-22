function min(set) {
  var z = Infinity;
  for(var v of set)
    z = v<z? v:z;
  return z;
};
module.exports = min;
