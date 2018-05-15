function addAll(set, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of val)
    if(++i>=bgn && i<end) set.add(v);
  return set;
};
function addArray(set, arr, bgn=0, end=arr.length) {
  bgn = bgn<0? arr.length+bgn:bgn;
  end = end<0? arr.length+end:end;
  end = end>arr.length? arr.length:end;
  for(var i=bgn; i<end; i++)
    set.add(arr[i]);
  return set;
};
function all(set) {
  for(var v of set)
    if(!v) return false;
  return true;
};
function any(set) {
  for(var v of set)
    if(v) return true;
  return false;
};
function average(set) {
  return set.size>0? sum(set)/set.size:0;
};
function concat() {
  var z = new Set();
  for(var i=0, I=arguments.length; i<I; i++)
    addAll(z, arguments[i]);
  return z;
};
function contains(set, itr) {
  if(set===itr) return true;
  for(var v of itr)
    if(!set.has(v)) return false;
  return true;
};
function deleteAll(set, val) {
  for(var v of val)
    set.delete(v);
  return set;
};
function equal(sa, sb) {
  if(sa.size!==sb.size) return false;
  for(var v of sa)
    if(!sb.has(v)) return false;
  return true;
};
function every(set, fn, ths) {
  for(var v of set)
    if(!fn.call(ths, v, v, set)) return false;
  return true;
};
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
function find(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return v;
};
module.exports = requi('set-filterto');
function forEach(set, fn, ths) {
  for(var v of set)
    fn.call(ths, v, v, set);
};
function keepAll14(set, val) {
  for(var v of set)
    if(!val.has(v)) set.delete(v);
  return set;
};
function intersection(sa, sb, z=new Set()) {
  if(z===sa) return keepAll14(z, sb);
  if(z===sb) return keepAll14(z, sa);
  for(var v of sa)
    if(sb.has(v)) z.add(v);
  return z;
};
function is(a) {
  return a instanceof Set;
};
function mapTo(set, fn, ths, z=new Set()) {
  for(var v of set)
    z.add(fn.call(ths, v, v, set));
  return z;
};
function max(set) {
  var z = -Infinity;
  for(var v of set)
    z = v>z? v:z;
  return z;
};
function min(set) {
  var z = Infinity;
  for(var v of set)
    z = v<z? v:z;
  return z;
};
function reduce(set, fn, acc) {
  for(var v of set)
    acc = acc!==undefined? fn(acc, v, v, set):v;
  return acc;
};
function shift(set) {
  var z;
  for(var v of set)
  { z = v; break; }
  set.delete(z);
  return z;
};
function some(set, fn, ths) {
  for(var v of set)
    if(fn.call(ths, v, v, set)) return true;
  return false;
};
function sum(set) {
  var z = 0;
  for(var v of set)
    z += v;
  return z;
};
const union = (function(module={}, exports={}) {
  'use strict';
  
  module.exports = (set1, set2) => {
  	const res = new Set(set1);
  
  	for (const value of set2) {
  		res.add(value);
  	}
  
  	return res;
  };
  
  return module.exports? module.exports:exports;
})();
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
Set.filterTo = filterTo;
Set.find = find;
Set.requi = requi;
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
Set.union = union;
module.exports = Set;
