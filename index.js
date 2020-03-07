function union$(s, l) {
  for(var v of x)
    s.set(v);
  return s;
}
function union(s, t) {
  return union$(new Set(s), t);
}
exports.union = union;
exports.union$ = union$;
