function some(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return true;
  return false;
};
module.exports = some;
