function equal(sa, sb) {
  if(sa.size!==sb.size) return false;
  for(var v of sa)
    if(!sb.has(v)) return false;
  return true;
};
module.exports = equal;
