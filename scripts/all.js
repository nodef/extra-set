function all(set) {
  for(var v of set)
    if(!v) return false;
  return true;
};
module.exports = all;
