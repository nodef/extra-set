const addAll = require('./add-all');
function unionTo(sa, sb, z=new Set()) {
  if(z!==sa) addAll(z, sa);
  if(z!==sb) addAll(z, sb);
  return z;
};
module.exports = unionTo;
