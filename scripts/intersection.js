function keepAll(set, val) {
  for(var v of set)
    if(!val.has(v)) set.delete(v);
  return set;
};
function intersection(sa, sb, z=new Set()) {
  if(z===sa) return keepAll(z, sb);
  if(z===sb) return keepAll(z, sa);
  for(var v of sa)
    if(sb.has(v)) z.add(v);
  return z;
};
module.exports = intersection;
