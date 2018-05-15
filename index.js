// 0. set-addall (addAll)
function addAll(set, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of val)
    if(++i>=bgn && i<end) set.add(v);
  return set;
};
// 1. set-addarray (addArray)
function addArray(set, arr, bgn=0, end=arr.length) {
  bgn = bgn<0? arr.length+bgn:bgn;
  end = end<0? arr.length+end:end;
  end = end>arr.length? arr.length:end;
  for(var i=bgn; i<end; i++)
    set.add(arr[i]);
  return set;
};
// 2. set-all (all)
function all(set) {
  for(var v of set)
    if(!v) return false;
  return true;
};
// 3. set-any (any)
function any(set) {
  for(var v of set)
    if(v) return true;
  return false;
};
// 4. set-average (average)
function average(set) {
  return set.size>0? sum(set)/set.size:0;
};
// 5. set-concat (concat)
function concat() {
  var z = new Set();
  for(var i=0, I=arguments.length; i<I; i++)
    addAll(z, arguments[i]);
  return z;
};
// 6. set-contains (contains)
function contains(set, itr) {
  if(set===itr) return true;
  for(var v of itr)
    if(!set.has(v)) return false;
  return true;
};
// 7. set-deleteall (deleteAll)
function deleteAll(set, val) {
  for(var v of val)
    set.delete(v);
  return set;
};
// 8. set-equal (equal)
function equal(sa, sb) {
  if(sa.size!==sb.size) return false;
  for(var v of sa)
    if(!sb.has(v)) return false;
  return true;
};
// 9. set-every (every)
function every(set, fn, ths) {
  for(var v of set)
    if(!fn.call(ths, v, v, set)) return false;
  return true;
};
// 10. set-filterto (filterTo)
function same10(set, fn, ths) {
  for(var v of set)
    if(!fn.call(ths, v, v, set)) set.delete(v);
  return set;
};
function filterTo(set, fn, ths, z=new Set()) {
  if(z===set) return same10(set, fn, ths);
  for(var v of set)
    if(fn.call(ths, v, v, set)) z.add(v);
  return z;
};
// 11. set-find (find)
function find(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return v;
};
// 13. set-foreach (forEach)
function forEach(set, fn, ths) {
  for(var v of set)
    fn.call(ths, v, v, set);
};
// 14. set-intersection (intersection)
function keepAll13(set, val) {
  for(var v of set)
    if(!val.has(v)) set.delete(v);
  return set;
};
function intersection(sa, sb, z=new Set()) {
  if(z===sa) return keepAll13(z, sb);
  if(z===sb) return keepAll13(z, sa);
  for(var v of sa)
    if(sb.has(v)) z.add(v);
  return z;
};
// 15. set-is (is)
function is(a) {
  return a instanceof Set;
};
// 16. set-mapto (mapTo)
function mapTo(set, fn, ths, z=new Set()) {
  for(var v of set)
    z.add(fn.call(ths, v, v, set));
  return z;
};
// 17. set-max (max)
function max(set) {
  var z = -Infinity;
  for(var v of set)
    z = v>z? v:z;
  return z;
};
// 18. set-min (min)
function min(set) {
  var z = Infinity;
  for(var v of set)
    z = v<z? v:z;
  return z;
};
// 19. set-reduce (reduce)
function reduce(set, fn, acc) {
  for(var v of set)
    acc = acc!==undefined? fn(acc, v, v, set):v;
  return acc;
};
// 20. set-shift (shift)
function shift(set) {
  var z;
  for(var v of set)
  { z = v; break; }
  set.delete(z);
  return z;
};
// 21. set-some (some)
function some(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return true;
  return false;
};
// 22. set-sum (sum)
function sum(set) {
  var z = 0;
  for(var v of set)
    z += v;
  return z;
};
// 23. set-unionto (unionTo)
function unionTo(sa, sb, z=new Set()) {
  if(z!==sa) addAll(z, sa);
  if(z!==sb) addAll(z, sb);
  return z;
};
Set.addAll = addAll;
Set.addArray = addArray;
Set.all = all;
Set.any = any;
Set.average = average;
Set.concat = concat;
Set.contains = contains;
Set.deleteAll = deleteAll;
Set.equal = equal;
Set.every = every;
Set.filter = filterTo;
Set.find = find;
Set.findAll = filterTo;
Set.forEach = forEach;
Set.intersection = intersection;
Set.is = is;
Set.mapTo = mapTo;
Set.max = max;
Set.min = min;
Set.reduce = reduce;
Set.shift = shift;
Set.some = some;
Set.sum = sum;
Set.union = unionTo;
module.exports = Set;
