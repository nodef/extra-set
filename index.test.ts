import {assertEquals} from "@std/assert";
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
} from "./index.ts";




// ABOUT
// -----

Deno.test("is", () => {
  let a;
  a = is(new Set([1, 2]));
  assertEquals(a, true);
  a = is(new Set());
  assertEquals(a, true);
  a = is(1);
  assertEquals(a, false);
});


Deno.test("values", () => {
  const x = new Set([1, 2, 3]);
  const a = values(x);
  assertEquals([...a], [1, 2, 3]);
});


Deno.test("entries", () => {
  const x = new Set([1, 2, 3]);
  const a = entries(x);
  assertEquals([...a], [[1, 1], [2, 2], [3, 3]]);
});




// GENERATE
// --------

Deno.test("from", () => {
  let a;
  const vs = [1, 2, 3, 4];
  a  = from(vs);
  assertEquals(a, new Set([1, 2, 3, 4]));
  a  = from(vs, v => v % 2);
  assertEquals(a, new Set([1, 0]));
});


Deno.test("from$", () => {
  let a;
  const vs = [1, 2, 3];
  a  = from$(vs);
  assertEquals(a, new Set([1, 2, 3]));
  const x = new Set([1, 2, 3]);
  a = from$(x);
  assertEquals(a, new Set([1, 2, 3]));
  assertEquals(x, new Set([1, 2, 3]));
  a.delete(3);
  assertEquals(x, new Set([1, 2]));
});




// COMPARE
// -------

Deno.test("compare", () => {
  let y, a;
  const x = new Set([1, 2]);
  y = new Set([1, 2, 3]);
  a = compare(x, y);
  assertEquals(a, -1);
  y = new Set([1, 2]);
  a = compare(x, y);
  assertEquals(a, 0);
  y = new Set([1, -2]);
  a = compare(x, y);
  assertEquals(a, 1);
});


Deno.test("isEqual", () => {
  let y, a;
  const x = new Set([1, 2]);
  y = new Set([1, 2]);
  a = isEqual(x, y);
  assertEquals(a, true);
  y = new Set([11, 12]);
  a = isEqual(x, y);
  assertEquals(a, false);
});




// SIZE
// ----

Deno.test("size", () => {
  const x = new Set([1, 2, 3]);
  const a = size(x);
  assertEquals(a, 3);
});


Deno.test("isEmpty", () => {
  let x, a;
  x = new Set([1, 2, 3]);
  a = isEmpty(x);
  assertEquals(a, false);
  x = new Set<number>();
  a = isEmpty(x);
  assertEquals(a, true);
});




// ADD/REMOVE
// ----------

Deno.test("add", () => {
  let a;
  const x = new Set([2, 4, 6 ,8]);
  a = add(x, 40);
  assertEquals(a, new Set([2, 4, 6, 8, 40]));
  a = add(x, 80);
  assertEquals(a, new Set([2, 4, 6, 8, 80]));
})


Deno.test("add$", () => {
  let x, a;
  x = new Set([2, 4, 6, 8]);
  a = add$(x, 40);
  assertEquals(a, new Set([2, 4, 6, 8, 40]));
  assertEquals(x, new Set([2, 4, 6, 8, 40]));
  x = new Set([2, 4, 6, 8]);
  a = add$(x, 80);
  assertEquals(a, new Set([2, 4, 6, 8, 80]));
});


Deno.test("remove", () => {
  let a;
  const x = new Set([2, 4, 6, 8]);
  a = remove(x, 4);
  assertEquals(a, new Set([2, 6, 8]));
  a = remove(x, 8);
  assertEquals(a, new Set([2, 4, 6]));
});


Deno.test("remove$", () => {
  let x, a;
  x = new Set([2, 4, 6, 8]);
  a = remove$(x, 4);
  assertEquals(a, new Set([2, 6, 8]));
  assertEquals(x, new Set([2, 6, 8]));
  x = new Set([2, 4, 6, 8]);
  a = remove$(x, 8);
  assertEquals(a, new Set([2, 4, 6]));
});




// PROPERTY
// --------

Deno.test("count", () => {
  let a;
  const x = new Set([1, 2, 3, 4, 5]);
  a = count(x, v => v % 2 === 1);
  assertEquals(a, 3);
  a = count(x, v => v % 2 === 0);
  assertEquals(a, 2);
});


Deno.test("countAs", () => {
  let a;
  const x = new Set([1, 2, 3, 4, 5]);
  a = countAs(x, v => v % 3);
  assertEquals(a, new Map([[1, 2], [2, 2], [0, 1]]));
  a = countAs(x, v => v % 2);
  assertEquals(a, new Map([[1, 3], [0, 2]]));
});


Deno.test("min", () => {
  let a;
  const x = new Set([1, 2, -3, -4]);
  a = min(x);
  assertEquals(a, -4);
  a = min(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, 1);
  a = min(x, null, v => Math.abs(v));
  assertEquals(a, 1);
});


Deno.test("max", () => {
  let a;
  const x = new Set([1, 2, -3, -4]);
  a = max(x);
  assertEquals(a, 2);
  a = max(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, -4);
  a = max(x, null, v => Math.abs(v));
  assertEquals(a, -4);
});


Deno.test("range", () => {
  let a;
  const x = new Set([1, 2, -3, -4]);
  a = range(x);
  assertEquals(a, [-4, 2]);
  a = range(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, [1, -4]);
  a = range(x, null, v => Math.abs(v));
  assertEquals(a, [1, -4]);
});




// PART
// ----

Deno.test("head", () => {
  let x, a;
  x = new Set([1, 2, 3]);
  a = head(x);
  assertEquals(a, 1);
  x = new Set<number>();
  a = head(x, -1);
  assertEquals(a, -1);
});


Deno.test("tail", () => {
  let x, a;
  x = new Set([1, 2, 3]);
  a = tail(x);
  assertEquals(a, new Set([2, 3]));
  x = new Set([1]);
  a = tail(x);
  assertEquals(a, new Set<number>());
});


Deno.test("take", () => {
  let a;
  const x = new Set([1, 2, 3, 4]);
  a = take(x, 2);
  assertEquals(a, new Set([1, 2]));
  a = take(x, 3);
  assertEquals(a, new Set([1, 2, 3]));
});


Deno.test("take$", () => {
  let x, a;
  x = new Set([1, 2, 3, 4]);
  a = take$(x, 2);
  assertEquals(a, new Set([1, 2]));
  assertEquals(x, new Set([1, 2]));
  x = new Set([1, 2, 3, 4]);
  a = take$(x, 3);
  assertEquals(a, new Set([1, 2, 3]));
});


Deno.test("drop", () => {
  let a;
  const x = new Set([1, 2, 3, 4, 5]);
  a = drop(x, 2);
  assertEquals(a, new Set([3, 4, 5]));
  a = drop(x, 3);
  assertEquals(a, new Set([4, 5]));
});


Deno.test("drop$", () => {
  let x, a;
  x = new Set([1, 2, 3, 4, 5]);
  a = drop$(x, 2);
  assertEquals(a, new Set([3, 4, 5]));
  assertEquals(x, new Set([3, 4, 5]));
  x = new Set([1, 2, 3, 4, 5]);
  a = drop$(x, 3);
  assertEquals(a, new Set([4, 5]));
});




// ARRANGEMENTS
// ------------

Deno.test("subsets", () => {
  let x, a;
  x = new Set([1, 2]);
  a = subsets(x);
  assertEquals([...a], [
    new Set<number>(),
    new Set([1]),
    new Set([2]),
    new Set([1, 2]),
  ]);
  x = new Set([1, 2, 3]);
  a = subsets(x);
  assertEquals([...a], [
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


Deno.test("randomValue", () => {
  let a;
  const x = new Set([1, 2, 3]);
  a = randomValue(x);
  assertEquals(x.has(a), true);
  a = randomValue(x);
  assertEquals(x.has(a), true);
});


Deno.test("randomEntry", () => {
  let a;
  const x = new Set([1, 2, 3]);
  a = randomEntry(x);
  assertEquals(x.has(a[1]), true);
  assertEquals(a[0], a[1]);
  a = randomEntry(x);
  assertEquals(x.has(a[1]), true);
  assertEquals(a[0], a[1]);
});


Deno.test("randomSubset", () => {
  let a;
  const x = new Set([1, 2, 3, 4]);
  a = randomSubset(x);
  assertEquals(hasSubset(x, a), true);
  assertEquals(union(x, a), x);
  a = randomSubset(x, 3);
  assertEquals(hasSubset(x, a), true);
  assertEquals(union(x, a), x);
  assertEquals(a.size, 3);
});


Deno.test("hasSubset", () => {
  let y, a;
  const x = new Set([1, 2, 3, 4]);
  y = new Set([2, 4]);
  a = hasSubset(x, y);
  assertEquals(a, true);
  y = new Set([2, -4]);
  a = hasSubset(x, y);
  assertEquals(a, false);
});




// FIND
// ----

Deno.test("has", () => {
  let a;
  const x = new Set([1, 2, 3]);
  a = has(x, 3);
  assertEquals(a, true);
  a = has(x, 4);
  assertEquals(a, false);
});


Deno.test("find", () => {
  let a;
  const x = new Set([1, 2, 3, 4]);
  a = find(x, v => v % 2 === 0);
  assertEquals(a, 2);
  a = find(x, v => v % 8 === 0);
  assertEquals(a, undefined);
});


Deno.test("findAll", () => {
  let a;
  const x = new Set([1, 2, 3, 4]);
  a = findAll(x, v => v % 2 === 0);
  assertEquals(a, [2, 4]);
  a = findAll(x, v => v % 8 === 0);
  assertEquals(a, []);
});




// FUNCTIONAL
// ----------

Deno.test("forEach", () => {
  const x = new Set([1, 2, -3, -4]);
  const a: number[] = [];
  forEach(x, v => a.push(v));
  assertEquals(a, [1, 2, -3, -4]);
});


Deno.test("some", () => {
  let a;
  const x = new Set([1, 2, -3, -4]);
  a = some(x, v => v > 10);
  assertEquals(a, false);
  a = some(x, v => v < 0);
  assertEquals(a, true);
});


Deno.test("every", () => {
  let a;
  const x = new Set([1, 2, -3, -4]);
  a = every(x, v => v > 0);
  assertEquals(a, false);
  a = every(x, v => v > -10);
  assertEquals(a, true);
});


Deno.test("map", () => {
  const x = new Set([1, 2, 3, 4]);
  const a = map(x, v => v * 2);
  assertEquals(a, new Set([2, 4, 6, 8]));
});


Deno.test("map$", () => {
  const x = new Set([1, 2, 3, 4]);
  const a = map$(x, v => v * 2);
  assertEquals(a, new Set([2, 4, 6, 8]));
  assertEquals(x, new Set([2, 4, 6, 8]));
});


Deno.test("reduce", () => {
  let a;
  const x = new Set([1, 2, 3, 4]);
  a = reduce(x, (acc, v) => acc+v);
  assertEquals(a, 10);
  a = reduce(x, (acc, v) => acc+v, 100);
  assertEquals(a, 110);
});


Deno.test("filter", () => {
  let a;
  const x = new Set([1, 2, 3, 4, 5]);
  a = filter(x, v => v % 2 === 1);
  assertEquals(a, new Set([1, 3, 5]));
  a = filter(x, v => v % 2 === 0);
  assertEquals(a, new Set([2, 4]));
});


Deno.test("filter$", () => {
  let x, a;
  x = new Set([1, 2, 3, 4, 5]);
  a = filter$(x, v => v % 2 === 1);
  assertEquals(a, new Set([1, 3, 5]));
  assertEquals(x, new Set([1, 3, 5]));
  x = new Set([1, 2, 3, 4, 5]);
  a = filter$(x, v => v % 2 === 0);
  assertEquals(a, new Set([2, 4]));
});


Deno.test("reject", () => {
  let a;
  const x = new Set([1, 2, 3, 4, 5]);
  a = reject(x, v => v % 2 === 1);
  assertEquals(a, new Set([2, 4]));
  a = reject(x, v => v % 2 === 0);
  assertEquals(a, new Set([1, 3, 5]));
});


Deno.test("reject$", () => {
  let x, a;
  x = new Set([1, 2, 3, 4, 5]);
  a = reject$(x, v => v % 2 === 1);
  assertEquals(a, new Set([2, 4]));
  assertEquals(x, new Set([2, 4]));
  x = new Set([1, 2, 3, 4, 5]);
  a = reject$(x, v => v % 2 === 0);
  assertEquals(a, new Set([1, 3, 5]));
});


Deno.test("flat", () => {
  let a;
  const x = new Set([
    new Set([1, 2]),
    new Set([3, new Set([4, new Set([5])])]),
  ]);
  a = flat(x);
  assertEquals(a, new Set([1, 2, 3, 4, 5]));
  a = flat(x, 1);
  assertEquals(a, new Set([1, 2, 3, new Set([4, new Set([5])])]));
  a = flat(x, 2);
  assertEquals(a, new Set([1, 2, 3, 4, new Set([5])]));
});


Deno.test("flatMap", () => {
  let a;
  const x = new Set([
    new Set([1, 2]),
    new Set([3, new Set([4, new Set([5])])]),
  ]);
  a = flatMap(x);
  assertEquals(a, new Set([1, 2, 3, new Set([4, new Set([5])])]));
  a = flatMap(x, v => flat(v, 1));
  assertEquals(a, new Set([1, 2, 3, 4, new Set([5])]));
  a = flatMap(x, v => flat(v));
  assertEquals(a, new Set([1, 2, 3, 4, 5]));
});




// MANIPULATION
// ------------

Deno.test("partition", () => {
  let x, a;
  x = new Set([1, 2, 3, 4]);
  a = partition(x, v => v % 2 == 0);
  assertEquals(a, [new Set([2, 4]), new Set([1, 3])]);
  x = new Set([1, 2, 3, 4, 5]);
  a = partition(x, v => v % 2 == 1);
  assertEquals(a, [new Set([1, 3, 5]), new Set([2, 4])]);
});


Deno.test("partitionAs", () => {
  let x;
  x = new Set([1, 2, 3, 4]);
  const a = partitionAs(x, v => v % 2 === 0);
  assertEquals(a, new Map([[false, new Set([1, 3])], [true, new Set([2, 4])]]));
  x = new Set([1, 2, 3, 4, 5]);
  const b = partitionAs(x, v => v % 3);
  assertEquals(b, new Map([
    [1, new Set([1, 4])],
    [2, new Set([2, 5])],
    [0, new Set([3])],
  ]));
});


Deno.test("chunk", () => {
  let a;
  const x = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
  a = chunk(x, 3);
  assertEquals(a, [new Set([1, 2, 3]), new Set([4, 5, 6]), new Set([7, 8])]);
  a = chunk(x, 2, 3);
  assertEquals(a, [new Set([1, 2]), new Set([4, 5]), new Set([7, 8])]);
  a = chunk(x, 4, 3);
  assertEquals(a, [new Set([1, 2, 3, 4]), new Set([4, 5, 6, 7]), new Set([7, 8])]);
});




// COMBINE
// -------

Deno.test("concat", () => {
  let a;
  const x = new Set([1, 2]);
  const y = new Set([3, 4]);
  a = concat(x, y);
  assertEquals(a, new Set([1, 2, 3, 4]));
  const z = new Set([40, 50]);
  a = concat(x, y, z);
  assertEquals(a, new Set([1, 2, 3, 4, 40, 50]));
});


Deno.test("concat$", () => {
  let x, y, a;
  x = new Set([1, 2]);
  y = new Set([3, 4]);
  a = concat$(x, y);
  assertEquals(a, new Set([1, 2, 3, 4]));
  assertEquals(x, new Set([1, 2, 3, 4]));
  x = new Set([1, 2]);
  y = new Set([3, 4]);
  const z = new Set([40, 50]);
  a = concat$(x, y, z);
  assertEquals(a, new Set([1, 2, 3, 4, 40, 50]));
});


Deno.test("join", () => {
  let a;
  const x = new Set([1, 2, 3]);
  a = join(x);
  assertEquals(a, "1,2,3");
  a = join(x, ", ");
  assertEquals(a, "1, 2, 3");
});




// SET OPERATIONS
// --------------

Deno.test("isDisjoint", () => {
  let y, a;
  const x = new Set([1, 2, 3]);
  y = new Set([3, 4]);
  a = isDisjoint(x, y);
  assertEquals(a, false);
  y = new Set([4]);
  a = isDisjoint(x, y);
  assertEquals(a, true);
});


Deno.test("union", () => {
  const x = new Set([1, 2, 3]);
  const y = new Set([2, 3, 4]);
  const a = union(x, y);
  assertEquals(a, new Set([1, 2, 3, 4]));
});


Deno.test("union$", () => {
  const x = new Set([1, 2, 3]);
  const y = new Set([2, 3, 4]);
  const a = union$(x, y);
  assertEquals(a, new Set([1, 2, 3, 4]));
  assertEquals(x, new Set([1, 2, 3, 4]));
});


Deno.test("intersection", () => {
  const x = new Set([1, 2, 3, 4]);
  const y = new Set([2, 3, 5]);
  const a = intersection(x, y);
  assertEquals(a, new Set([2, 3]));
});


Deno.test("intersection$", () => {
  const x = new Set([1, 2, 3, 4]);
  const y = new Set([2, 3, 5]);
  const a = intersection$(x, y);
  assertEquals(a, new Set([2, 3]));
  assertEquals(x, new Set([2, 3]));
});


Deno.test("difference", () => {
  let y, a;
  const x = new Set([1, 2, 3, 4, 5]);
  y = new Set([2, 4]);
  a = difference(x, y);
  assertEquals(a, new Set([1, 3, 5]));
  y = new Set([2, -4]);
  a = difference(x, y);
  assertEquals(a, new Set([1, 3, 4, 5]));
});


Deno.test("difference$", () => {
  let x, y, a;
  x = new Set([1, 2, 3, 4, 5]);
  y = new Set([2, 4]);
  a = difference$(x, y);
  assertEquals(a, new Set([1, 3, 5]));
  assertEquals(x, new Set([1, 3, 5]));
  x = new Set([1, 2, 3, 4, 5]);
  y = new Set([2, -4]);
  a = difference$(x, y);
  assertEquals(a, new Set([1, 3, 4, 5]));
});


Deno.test("symmetricDifference", () => {
  let y, a;
  const x = new Set([1, 2, 3, 4]);
  y = new Set([3, 4, 5, 6]);
  a = symmetricDifference(x, y);
  assertEquals(a, new Set([1, 2, 5, 6]));
  y = new Set([4, 5, 6]);
  a = symmetricDifference(x, y);
  assertEquals(a, new Set([1, 2, 3, 5, 6]));
});


Deno.test("symmetricDifference$", () => {
  let x, y, a;
  x = new Set([1, 2, 3, 4]);
  y = new Set([3, 4, 5, 6]);
  a = symmetricDifference$(x, y);
  assertEquals(a, new Set([1, 2, 5, 6]));
  assertEquals(x, new Set([1, 2, 5, 6]));
  x = new Set([1, 2, 3, 4]);
  y = new Set([4, 5, 6]);
  a = symmetricDifference$(x, y);
  assertEquals(a, new Set([1, 2, 3, 5, 6]));
});


Deno.test("cartesianProduct", () => {
  const x = new Set([1, 2, 3]);
  const y = new Set([10, 20]);
  const a = cartesianProduct([x, y]);
  assertEquals([...a], [
    new Set([1, 10]),
    new Set([1, 20]),
    new Set([2, 10]),
    new Set([2, 20]),
    new Set([3, 10]),
    new Set([3, 20]),
  ]);
  const b = cartesianProduct([x, y], a => max(a));
  assertEquals([...b], [10, 20, 10, 20, 10, 20]);
});
