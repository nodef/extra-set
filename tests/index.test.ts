import {
  is,
  values,
  entries,
  from,
  from$,
  compare,
  isEqual,
  size,
  isEmpty,
  add,
  add$,
  remove,
  remove$,
  count,
  countAs,
  min,
  max,
  range,
  head,
  tail,
  take,
  take$,
  drop,
  drop$,
  subsets,
  randomValue,
  randomEntry,
  randomSubset,
  hasSubset,
  has,
  find,
  findAll,
  forEach,
  some,
  every,
  map,
  map$,
  reduce,
  filter,
  filter$,
  reject,
  reject$,
  flat,
  flatMap,
  partition,
  partitionAs,
  chunk,
  concat,
  concat$,
  join,
  isDisjoint,
  union,
  union$,
  intersection,
  intersection$,
  difference,
  difference$,
  symmetricDifference,
  symmetricDifference$,
  cartesianProduct,
} from "../src";




// ABOUT
// -----

test("is", () => {
  var a = is(new Set([1, 2]));
  expect(a).toBe(true);
  var a = is(new Set());
  expect(a).toBe(true);
  var a = is(1);
  expect(a).toBe(false);
});


test("values", () => {
  var x = new Set([1, 2, 3]);
  var a = values(x);
  expect([...a]).toStrictEqual([1, 2, 3]);
});


test("entries", () => {
  var x = new Set([1, 2, 3]);
  var a = entries(x);
  expect([...a]).toStrictEqual([[1, 1], [2, 2], [3, 3]]);
});




// GENERATE
// --------

test("from", () => {
  var vs = [1, 2, 3, 4];
  var a  = from(vs);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4]));
  var a  = from(vs, v => v % 2);
  expect(a).toStrictEqual(new Set([1, 0]));
});


test("from$", () => {
  var vs = [1, 2, 3];
  var a  = from$(vs);
  expect(a).toStrictEqual(new Set([1, 2, 3]));
  var x = new Set([1, 2, 3]);
  var a = from$(x);
  expect(a).toStrictEqual(new Set([1, 2, 3]));
  expect(x).toStrictEqual(new Set([1, 2, 3]));
  a.delete(3);
  expect(x).toStrictEqual(new Set([1, 2]));
});




// COMPARE
// -------

test("compare", () => {
  var x = new Set([1, 2]);
  var y = new Set([1, 2, 3]);
  var a = compare(x, y);
  expect(a).toBe(-1);
  var y = new Set([1, 2]);
  var a = compare(x, y);
  expect(a).toBe(0);
  var y = new Set([1, -2]);
  var a = compare(x, y);
  expect(a).toBe(1);
});


test("isEqual", () => {
  var x = new Set([1, 2]);
  var y = new Set([1, 2]);
  var a = isEqual(x, y);
  expect(a).toBe(true);
  var y = new Set([11, 12]);
  var a = isEqual(x, y);
  expect(a).toBe(false);
});




// SIZE
// ----

test("size", () => {
  var x = new Set([1, 2, 3]);
  var a = size(x);
  expect(a).toBe(3);
});


test("isEmpty", () => {
  var x = new Set([1, 2, 3]);
  var a = isEmpty(x);
  expect(a).toBe(false);
  var x = new Set<number>();
  var a = isEmpty(x);
  expect(a).toBe(true);
});




// ADD/REMOVE
// ----------

test("add", () => {
  var x = new Set([2, 4, 6 ,8]);
  var a = add(x, 40);
  expect(a).toStrictEqual(new Set([2, 4, 6, 8, 40]));
  var a = add(x, 80);
  expect(a).toStrictEqual(new Set([2, 4, 6, 8, 80]));
})


test("add$", () => {
  var x = new Set([2, 4, 6, 8]);
  var a = add$(x, 40);
  expect(a).toStrictEqual(new Set([2, 4, 6, 8, 40]));
  expect(x).toStrictEqual(new Set([2, 4, 6, 8, 40]));
  var x = new Set([2, 4, 6, 8]);
  var a = add$(x, 80);
  expect(a).toStrictEqual(new Set([2, 4, 6, 8, 80]));
});


test("remove", () => {
  var x = new Set([2, 4, 6, 8]);
  var a = remove(x, 4);
  expect(a).toStrictEqual(new Set([2, 6, 8]));
  var a = remove(x, 8);
  expect(a).toStrictEqual(new Set([2, 4, 6]));
});


test("remove$", () => {
  var x = new Set([2, 4, 6, 8]);
  var a = remove$(x, 4);
  expect(a).toStrictEqual(new Set([2, 6, 8]));
  expect(x).toStrictEqual(new Set([2, 6, 8]));
  var x = new Set([2, 4, 6, 8]);
  var a = remove$(x, 8);
  expect(a).toStrictEqual(new Set([2, 4, 6]));
});




// PROPERTY
// --------

test("count", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = count(x, v => v % 2 === 1);
  expect(a).toBe(3);
  var a = count(x, v => v % 2 === 0);
  expect(a).toBe(2);
});


test("countAs", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = countAs(x, v => v % 3);
  expect(a).toStrictEqual(new Map([[1, 2], [2, 2], [0, 1]]));
  var a = countAs(x, v => v % 2);
  expect(a).toStrictEqual(new Map([[1, 3], [0, 2]]));
});


test("min", () => {
  var x = new Set([1, 2, -3, -4]);
  var a = min(x);
  expect(a).toBe(-4);
  var a = min(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var a = min(x, null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("max", () => {
  var x = new Set([1, 2, -3, -4]);
  var a = max(x);
  expect(a).toBe(2);
  var a = max(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(-4);
  var a = max(x, null, v => Math.abs(v));
  expect(a).toBe(-4);
});


test("range", () => {
  var x = new Set([1, 2, -3, -4]);
  var a = range(x);
  expect(a).toStrictEqual([-4, 2]);
  var a = range(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([1, -4]);
  var a = range(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([1, -4]);
});




// PART
// ----

test("head", () => {
  var x = new Set([1, 2, 3]);
  var a = head(x);
  expect(a).toBe(1);
  var x = new Set<number>();
  var a = head(x, -1);
  expect(a).toBe(-1);
});


test("tail", () => {
  var x = new Set([1, 2, 3]);
  var a = tail(x);
  expect(a).toStrictEqual(new Set([2, 3]));
  var x = new Set([1]);
  var a = tail(x);
  expect(a).toStrictEqual(new Set<number>());
});


test("take", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = take(x, 2);
  expect(a).toStrictEqual(new Set([1, 2]));
  var a = take(x, 3);
  expect(a).toStrictEqual(new Set([1, 2, 3]));
});


test("take$", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = take$(x, 2);
  expect(a).toStrictEqual(new Set([1, 2]));
  expect(x).toStrictEqual(new Set([1, 2]));
  var x = new Set([1, 2, 3, 4]);
  var a = take$(x, 3);
  expect(a).toStrictEqual(new Set([1, 2, 3]));
});


test("drop", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = drop(x, 2);
  expect(a).toStrictEqual(new Set([3, 4, 5]));
  var a = drop(x, 3);
  expect(a).toStrictEqual(new Set([4, 5]));
});


test("drop$", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = drop$(x, 2);
  expect(a).toStrictEqual(new Set([3, 4, 5]));
  expect(x).toStrictEqual(new Set([3, 4, 5]));
  var x = new Set([1, 2, 3, 4, 5]);
  var a = drop$(x, 3);
  expect(a).toStrictEqual(new Set([4, 5]));
});




// ARRANGEMENTS
// ------------

test("subsets", () => {
  var x = new Set([1, 2]);
  var a = subsets(x);
  expect([...a]).toStrictEqual([
    new Set<number>(),
    new Set([1]),
    new Set([2]),
    new Set([1, 2]),
  ]);
  var x = new Set([1, 2, 3]);
  var a = subsets(x);
  expect([...a]).toStrictEqual([
    new Set<number>(),
    new Set([1]),
    new Set([2]),
    new Set([1, 2]),
    new Set([3]),
    new Set([1, 3]),
    new Set([2, 3]),
    new Set([1, 2, 3]),
  ]);
});


test("randomValue", () => {
  var x = new Set([1, 2, 3]);
  var a = randomValue(x);
  expect(x.has(a)).toBe(true);
  var a = randomValue(x);
  expect(x.has(a)).toBe(true);
});


test("randomEntry", () => {
  var x = new Set([1, 2, 3]);
  var a = randomEntry(x);
  expect(x.has(a[1])).toBe(true);
  expect(a[0]).toBe(a[1]);
  var a = randomEntry(x);
  expect(x.has(a[1])).toBe(true);
  expect(a[0]).toBe(a[1]);
});


test("randomSubset", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = randomSubset(x);
  expect(hasSubset(x, a)).toBe(true);
  expect(union(x, a)).toStrictEqual(x);
  var a = randomSubset(x, 3);
  expect(hasSubset(x, a)).toBe(true);
  expect(union(x, a)).toStrictEqual(x);
  expect(a.size).toBe(3);
});


test("hasSubset", () => {
  var x = new Set([1, 2, 3, 4]);
  var y = new Set([2, 4]);
  var a = hasSubset(x, y);
  expect(a).toBe(true);
  var y = new Set([2, -4]);
  var a = hasSubset(x, y);
  expect(a).toBe(false);
});




// FIND
// ----

test("has", () => {
  var x = new Set([1, 2, 3]);
  var a = has(x, 3);
  expect(a).toBe(true);
  var a = has(x, 4);
  expect(a).toBe(false);
});


test("find", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = find(x, v => v % 2 === 0);
  expect(a).toBe(2);
  var a = find(x, v => v % 8 === 0);
  expect(a).toBeUndefined();
});


test("findAll", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = findAll(x, v => v % 2 === 0);
  expect(a).toStrictEqual([2, 4]);
  var a = findAll(x, v => v % 8 === 0);
  expect(a).toStrictEqual([]);
});




// FUNCTIONAL
// ----------

test("forEach", () => {
  var x = new Set([1, 2, -3, -4]);
  var a: number[] = [];
  forEach(x, v => a.push(v));
  expect(a).toStrictEqual([1, 2, -3, -4]);
});


test("some", () => {
  var x = new Set([1, 2, -3, -4]);
  var a = some(x, v => v > 10);
  expect(a).toBe(false);
  var a = some(x, v => v < 0);
  expect(a).toBe(true);
});


test("every", () => {
  var x = new Set([1, 2, -3, -4]);
  var a = every(x, v => v > 0);
  expect(a).toBe(false);
  var a = every(x, v => v > -10);
  expect(a).toBe(true);
});


test("map", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = map(x, v => v * 2);
  expect(a).toStrictEqual(new Set([2, 4, 6, 8]));
});


test("map$", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = map$(x, v => v * 2);
  expect(a).toStrictEqual(new Set([2, 4, 6, 8]));
  expect(x).toStrictEqual(new Set([2, 4, 6, 8]));
});


test("reduce", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = reduce(x, (acc, v) => acc+v);
  expect(a).toBe(10);
  var a = reduce(x, (acc, v) => acc+v, 100);
  expect(a).toBe(110);
});


test("filter", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = filter(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Set([1, 3, 5]));
  var a = filter(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Set([2, 4]));
});


test("filter$", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = filter$(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Set([1, 3, 5]));
  expect(x).toStrictEqual(new Set([1, 3, 5]));
  var x = new Set([1, 2, 3, 4, 5]);
  var a = filter$(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Set([2, 4]));
});


test("reject", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = reject(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Set([2, 4]));
  var a = reject(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Set([1, 3, 5]));
});


test("reject$", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var a = reject$(x, v => v % 2 === 1);
  expect(a).toStrictEqual(new Set([2, 4]));
  expect(x).toStrictEqual(new Set([2, 4]));
  var x = new Set([1, 2, 3, 4, 5]);
  var a = reject$(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Set([1, 3, 5]));
});


test("flat", () => {
  var x = new Set([
    new Set([1, 2]),
    new Set([3, new Set([4, new Set([5])])]),
  ]);
  var a = flat(x);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4, 5]));
  var a = flat(x, 1);
  expect(a).toStrictEqual(new Set([1, 2, 3, new Set([4, new Set([5])])]));
  var a = flat(x, 2);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4, new Set([5])]));
});


test("flatMap", () => {
  var x = new Set([
    new Set([1, 2]),
    new Set([3, new Set([4, new Set([5])])]),
  ]);
  var a = flatMap(x);
  expect(a).toStrictEqual(new Set([1, 2, 3, new Set([4, new Set([5])])]));
  var a = flatMap(x, v => flat(v, 1));
  expect(a).toStrictEqual(new Set([1, 2, 3, 4, new Set([5])]));
  var a = flatMap(x, v => flat(v));
  expect(a).toStrictEqual(new Set([1, 2, 3, 4, 5]));
});




// MANIPULATION
// ------------

test("partition", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = partition(x, v => v % 2 == 0);
  expect(a).toStrictEqual([new Set([2, 4]), new Set([1, 3])]);
  var x = new Set([1, 2, 3, 4, 5]);
  var a = partition(x, v => v % 2 == 1);
  expect(a).toStrictEqual([new Set([1, 3, 5]), new Set([2, 4])]);
});


test("partitionAs", () => {
  var x = new Set([1, 2, 3, 4]);
  var a = partitionAs(x, v => v % 2 === 0);
  expect(a).toStrictEqual(new Map([[false, new Set([1, 3])], [true, new Set([2, 4])]]));
  var x = new Set([1, 2, 3, 4, 5]);
  var b = partitionAs(x, v => v % 3);
  expect(b).toStrictEqual(new Map([
    [1, new Set([1, 4])],
    [2, new Set([2, 5])],
    [0, new Set([3])],
  ]));
});


test("chunk", () => {
  var x = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
  var a = chunk(x, 3);
  expect(a).toStrictEqual([new Set([1, 2, 3]), new Set([4, 5, 6]), new Set([7, 8])]);
  var a = chunk(x, 2, 3);
  expect(a).toStrictEqual([new Set([1, 2]), new Set([4, 5]), new Set([7, 8])]);
  var a = chunk(x, 4, 3);
  expect(a).toStrictEqual([new Set([1, 2, 3, 4]), new Set([4, 5, 6, 7]), new Set([7, 8])]);
});




// COMBINE
// -------

test("concat", () => {
  var x = new Set([1, 2]);
  var y = new Set([3, 4]);
  var a = concat(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4]));
  var z = new Set([40, 50]);
  var a = concat(x, y, z);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4, 40, 50]));
});


test("concat$", () => {
  var x = new Set([1, 2]);
  var y = new Set([3, 4]);
  var a = concat$(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4]));
  expect(x).toStrictEqual(new Set([1, 2, 3, 4]));
  var x = new Set([1, 2]);
  var y = new Set([3, 4]);
  var z = new Set([40, 50]);
  var a = concat$(x, y, z);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4, 40, 50]));
});


test("join", () => {
  var x = new Set([1, 2, 3]);
  var a = join(x);
  expect(a).toBe("1,2,3");
  var a = join(x, ", ");
  expect(a).toBe("1, 2, 3");
});




// SET OPERATIONS
// --------------

test("isDisjoint", () => {
  var x = new Set([1, 2, 3]);
  var y = new Set([3, 4]);
  var a = isDisjoint(x, y);
  expect(a).toBe(false);
  var y = new Set([4]);
  var a = isDisjoint(x, y);
  expect(a).toBe(true);
});


test("union", () => {
  var x = new Set([1, 2, 3]);
  var y = new Set([2, 3, 4]);
  var a = union(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4]));
});


test("union$", () => {
  var x = new Set([1, 2, 3]);
  var y = new Set([2, 3, 4]);
  var a = union$(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 3, 4]));
  expect(x).toStrictEqual(new Set([1, 2, 3, 4]));
});


test("intersection", () => {
  var x = new Set([1, 2, 3, 4]);
  var y = new Set([2, 3, 5]);
  var a = intersection(x, y);
  expect(a).toStrictEqual(new Set([2, 3]));
});


test("intersection$", () => {
  var x = new Set([1, 2, 3, 4]);
  var y = new Set([2, 3, 5]);
  var a = intersection$(x, y);
  expect(a).toStrictEqual(new Set([2, 3]));
  expect(x).toStrictEqual(new Set([2, 3]));
});


test("difference", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var y = new Set([2, 4]);
  var a = difference(x, y);
  expect(a).toStrictEqual(new Set([1, 3, 5]));
  var y = new Set([2, -4]);
  var a = difference(x, y);
  expect(a).toStrictEqual(new Set([1, 3, 4, 5]));
});


test("difference$", () => {
  var x = new Set([1, 2, 3, 4, 5]);
  var y = new Set([2, 4]);
  var a = difference$(x, y);
  expect(a).toStrictEqual(new Set([1, 3, 5]));
  expect(x).toStrictEqual(new Set([1, 3, 5]));
  var x = new Set([1, 2, 3, 4, 5]);
  var y = new Set([2, -4]);
  var a = difference$(x, y);
  expect(a).toStrictEqual(new Set([1, 3, 4, 5]));
});


test("symmetricDifference", () => {
  var x = new Set([1, 2, 3, 4]);
  var y = new Set([3, 4, 5, 6]);
  var a = symmetricDifference(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 5, 6]));
  var y = new Set([4, 5, 6]);
  var a = symmetricDifference(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 3, 5, 6]));
});


test("symmetricDifference$", () => {
  var x = new Set([1, 2, 3, 4]);
  var y = new Set([3, 4, 5, 6]);
  var a = symmetricDifference$(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 5, 6]));
  expect(x).toStrictEqual(new Set([1, 2, 5, 6]));
  var x = new Set([1, 2, 3, 4]);
  var y = new Set([4, 5, 6]);
  var a = symmetricDifference$(x, y);
  expect(a).toStrictEqual(new Set([1, 2, 3, 5, 6]));
});


test("cartesianProduct", () => {
  var x = new Set([1, 2, 3]);
  var y = new Set([10, 20]);
  var a = cartesianProduct([x, y]);
  expect([...a]).toStrictEqual([
    new Set([1, 10]),
    new Set([1, 20]),
    new Set([2, 10]),
    new Set([2, 20]),
    new Set([3, 10]),
    new Set([3, 20]),
  ]);
  var b = cartesianProduct([x, y], a => max(a));
  expect([...b]).toStrictEqual([10, 20, 10, 20, 10, 20]);
});
