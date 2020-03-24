function asSets(cs) {
  var a = []
  for(var c of cs)
    a.push(c instanceof Set? c : new Set(c));
  return a;
}
module.exports = asSets;
