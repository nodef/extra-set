function deleteAll(set, val) {
  for(var v of val)
    set.delete(v);
  return set;
};
module.exports = deleteAll;
