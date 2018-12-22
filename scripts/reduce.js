function reduce(set, fn, acc) {
  for(var v of set)
    acc = acc!==undefined? fn(acc, v, v, set):v;
  return acc;
};
module.exports = reduce;
