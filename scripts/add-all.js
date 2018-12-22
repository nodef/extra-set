function addAll(set, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of val)
    if(++i>=bgn && i<end) set.add(v);
  return set;
};
module.exports = addAll;
