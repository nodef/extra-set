function any(set) {
  for(var v of set)
    if(v) return true;
  return false;
};
module.exports = any;
