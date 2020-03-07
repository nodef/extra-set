const union$ = require('./union$');

function union(s, t) {
  return union$(new Set(s), t);
}
module.exports = union;
