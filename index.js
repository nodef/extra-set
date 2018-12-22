function is(a) {
  return a instanceof Set;
}
function equal(sa, sb) {
  if(sa.size!==sb.size) return false;
  for(var v of sa)
    if(!sb.has(v)) return false;
  return true;
}
function addAll(set, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of val)
    if(++i>=bgn && i<end) set.add(v);
  return set;
}
function addArray(set, arr, bgn=0, end=arr.length) {
  bgn = bgn<0? arr.length+bgn:bgn;
  end = end<0? arr.length+end:end;
  end = end>arr.length? arr.length:end;
  for(var i=bgn; i<end; i++)
    set.add(arr[i]);
  return set;
}
function deleteAll(set, val) {
  for(var v of val)
    set.delete(v);
  return set;
}
function contains(set, itr) {
  if(set===itr) return true;
  for(var v of itr)
    if(!set.has(v)) return false;
  return true;
}
function shift(set) {
  var z;
  for(var v of set)
  { z = v; break; }
  set.delete(z);
  return z;
}
function keepAll(set, val) {
  for(var v of set)
    if(!val.has(v)) set.delete(v);
  return set;
}
function intersection(sa, sb, z=new Set()) {
  if(z===sa) return keepAll(z, sb);
  if(z===sb) return keepAll(z, sa);
  for(var v of sa)
    if(sb.has(v)) z.add(v);
  return z;
}
function unionTo(sa, sb, z=new Set()) {
  if(z!==sa) addAll(z, sa);
  if(z!==sb) addAll(z, sb);
  return z;
}
function concat() {
  var z = new Set();
  for(var i=0, I=arguments.length; i<I; i++)
    addAll(z, arguments[i]);
  return z;
}
function forEach(set, fn, ths) {
  for(var v of set)
    fn.call(ths, v, v, set);
}
function some(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return true;
  return false;
}
function every(set, fn, ths) {
  for(var v of set)
    if(!fn.call(ths, v, v, set)) return false;
  return true;
}
function find(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return v;
}
function same(set, fn, ths) {
  for(var v of set)
    if(!fn.call(ths, v, v, set)) set.delete(v);
  return set;
}
function filterTo(set, fn, ths, z=new Set()) {
  if(z===set) return same(set, fn, ths);
  for(var v of set)
    if(fn.call(ths, v, v, set)) z.add(v);
  return z;
}

function reduce(set, fn, acc) {
  for(var v of set)
    acc = acc!==undefined? fn(acc, v, v, set):v;
  return acc;
}
function mapTo(set, fn, ths, z=new Set()) {
  for(var v of set)
    z.add(fn.call(ths, v, v, set));
  return z;
}
function any(set) {
  for(var v of set)
    if(v) return true;
  return false;
}
function all(set) {
  for(var v of set)
    if(!v) return false;
  return true;
}
function min(set) {
  var z = Infinity;
  for(var v of set)
    z = v<z? v:z;
  return z;
}
function max(set) {
  var z = -Infinity;
  for(var v of set)
    z = v>z? v:z;
  return z;
}
function sum(set) {
  var z = 0;
  for(var v of set)
    z += v;
  return z;
}
function average(set) {
  return set.size>0? sum(set)/set.size:0;
}
// 1. Datatype methods
Set.is = is;

// 2. About methods
Set.equal = equal;

// 3. Transform methods
Set.addAll = addAll;
Set.addArray = addArray;
Set.deleteAll = deleteAll;
Set.contains = contains;
Set.shift = shift;
Set.intersection = intersection;
Set.union = unionTo;
Set.concat = concat;

// 4. Functional methods
Set.forEach = forEach;
Set.some = some;
Set.every = every;
Set.find = find;
Set.findAll = filterTo;
Set.reduce = reduce;
Set.filter = filterTo;
Set.map = mapTo;

// 5. Evaluate methods
Set.any = any;
Set.all = all;
Set.min = min;
Set.max = max;
Set.sum = sum;
Set.average = average;
module.exports = Set;
