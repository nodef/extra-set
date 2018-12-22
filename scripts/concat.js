const addAll = require('./add-all');
function concat() {
  var z = new Set();
  for(var i=0, I=arguments.length; i<I; i++)
    addAll(z, arguments[i]);
  return z;
};
module.exports = concat;
