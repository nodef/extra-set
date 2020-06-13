A [set] is a collection of unique values. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

```javascript
const set = require('extra-set');

var x = new Set([1, 2, 3, 4, 5]);
var y = new Set([2, 4]);
set.difference(x, y);
// Set(3) { 1, 3, 5 }

var x = new Set([1, 2, 3]);
var y = new Set([3, 4]);
set.isDisjoint(x, y);
// false

var x = new Set([1, 2, 3, 4]);
var y = new Set([3, 4, 5, 6]);
set.symmetricDifference(x, y);
// Set(4) { 1, 2, 5, 6 }

var x = new Set([1, 2, 3]);
[...set.subsets(x)];
// [
//   Set(0) {},
//   Set(1) { 1 },
//   Set(1) { 2 },
//   Set(2) { 1, 2 },
//   Set(1) { 3 },
//   Set(2) { 1, 3 },
//   Set(2) { 2, 3 },
//   Set(3) { 1, 2, 3 }
// ]
```

### reference

| Method                | Action
|-----------------------|-------
| [is]                  | Checks if value is map.
| [add]                 | Sets value at key.
| [remove]              | Deletes an entry.
| [size]                | Gets size of map.
|                       | 
| [head]                | Gets first entry.
| [take]                | Keeps first n entries only.
| [shift]               | Removes first entry.
| [from]                | Creates object from entries.
|                       | 
| [concat]              | Combines entries from maps, preferring last.
| [flat]                | Flattens nested map to given depth.
| [chunk]               | Breaks map into chunks of given size.
| [filterAt]            | Gets map with given keys.
|                       | 
| [map]                 | Updates values based on map function.
| [filter]              | Keeps entries which pass a test.
| [reduce]              | Reduces values to a single value.
| [range]               | Finds smallest and largest entries.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [cartesianProduct]    | Lists cartesian product of maps.
| [some]                | Checks if any value satisfies a test.
|                       | 
| [union]               | Gives entries present in any map.
| [intersection]        | Gives entries present in both maps.
| [difference]          | Gives entries of map not present in another.
| [symmetricDifference] | Gives entries not present in both maps.
| [isDisjoint]          | Checks if maps have no common keys.
|                       | 
| [value]               | Picks an arbitrary value.
| [entry]               | Picks an arbitrary entry.
| [subset]              | Picks an arbitrary subobject.
|                       | 
| [isEmpty]             | Checks if map is empty.
| [isEqual]             | Checks if two maps are equal.
| [compare]             | Compares two maps.
| [find]                | Finds value of an entry passing a test.
| [scanWhile]           | Finds key of first entry not passing a test.

<br>

[![nodef](https://merferry.glitch.me/card/extra-map.svg)](https://nodef.github.io)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[:vhs:]: https://asciinema.org/a/339194
[:package:]: https://www.npmjs.com/package/extra-set
[:moon:]: https://www.npmjs.com/package/extra-set.min
[:ledger:]: https://unpkg.com/extra-set/
[:running:]: https://npm.runkit.com/extra-set
