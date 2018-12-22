function contains(set, itr) {
  if(set===itr) return true;
  for(var v of itr)
    if(!set.has(v)) return false;
  return true;
};
module.exports = contains;
