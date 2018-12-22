const sum = require('./sum');
function average(set) {
  return set.size>0? sum(set)/set.size:0;
};
module.exports = average;
