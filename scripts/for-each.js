function forEach(set, fn, ths) {
  for(var v of set)
    fn.call(ths, v, v, set);
};
module.exports = forEach;
