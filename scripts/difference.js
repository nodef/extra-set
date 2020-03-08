const difference$ = require('./difference$');

function difference(s, ...cs) {
  return difference$(new Set(s), cs);
}
module.exports = difference;
