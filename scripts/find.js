function find(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return v;
};
module.exports = find;