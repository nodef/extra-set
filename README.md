A pack of functions for working with Sets.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-set),
🌐 [Web](https://www.npmjs.com/package/extra-set.web),
📜 [Files](https://unpkg.com/extra-set/),
📰 [Docs](https://nodef.github.io/extra-set/),
📘 [Wiki](https://github.com/nodef/extra-set/wiki/).

A [Set] is a collection of unique values. This package includes common set
functions related to querying **about** sets, **generating** them, **comparing**
one with another, finding their **size**, **adding** and **removing** elements,
obtaining its **properties**, getting a **part** of it, getting a **subset**
elements in it, **finding** an element in it, performing **functional**
operations, **manipulating** it in various ways, **combining** together sets or
its elements, of performing **set** **operations** upon it.

All functions except `from*()` take set as 1st parameter. Methods like
`concat()` are pure and do not modify the set itself, while methods like
`concat$()` *do modify (update)* the set itself.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_set` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[Set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-set.web/index.js

<br>

```javascript
const set = require('extra-set');
// import * as set from "extra-set";
// import * as set from "https://unpkg.com/extra-set/index.mjs"; (Deno)

var x = new Set([1, 2, 3, 4, 5]);
var y = new Set([2, 4]);
set.difference(x, y);
// → Set(3) { 1, 3, 5 }

var x = new Set([1, 2, 3]);
var y = new Set([3, 4]);
set.isDisjoint(x, y);
// → false

var x = new Set([1, 2, 3, 4]);
var y = new Set([3, 4, 5, 6]);
set.symmetricDifference(x, y);
// → Set(4) { 1, 2, 5, 6 }

var x = new Set([1, 2, 3]);
[...set.subsets(x)];
// → [
// →   Set(0) {},
// →   Set(1) { 1 },
// →   Set(1) { 2 },
// →   Set(2) { 1, 2 },
// →   Set(1) { 3 },
// →   Set(2) { 1, 3 },
// →   Set(2) { 2, 3 },
// →   Set(3) { 1, 2, 3 }
// → ]
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is a set. |
| [values] | List all values. |
| [entries] | List all value-value pairs. |
|  |  |
| [from] | Convert an iterable to set. |
| [from$] | Convert an iterable to set. |
|  |  |
| [compare] | Compare two sets. |
| [isEqual] | Check if two sets are equal. |
|  |  |
| [size] | Find the size of a set. |
| [isEmpty] | Check if a set is empty. |
|  |  |
| [add] | Add a value to set. |
| [add$] | Add a value to set. |
| [remove] | Delete a value from set. |
| [remove$] | Delete a value from set. |
|  |  |
| [count] | Count values which satisfy a test. |
| [countAs] | Count occurrences of values. |
| [min] | Find smallest value. |
| [max] | Find largest value. |
| [range] | Find smallest and largest entries. |
|  |  |
| [head] | Get first value from set (default order). |
| [tail] | Get a set without its first value (default order). |
| [take] | Keep first n values only (default order). |
| [take$] | Keep first n values only (default order). |
| [drop] | Remove first n values (default order). |
| [drop$] | Remove first n values (default order). |
|  |  |
| [subsets] | List all possible subsets. |
| [randomValue] | Pick an arbitrary value. |
| [randomEntry] | Pick an arbitrary entry. |
| [randomSubset] | Pick an arbitrary subset. |
| [hasSubset] | Checks if set has a subset. |
|  |  |
| [has] | Check if set has a value. |
| [find] | Find first value passing a test (default order). |
| [findAll] | Find all values passing a test. |
|  |  |
| [forEach] | Call a function for each value. |
| [some] | Check if any value satisfies a test. |
| [every] | Check if all values satisfy a test. |
| [map] | Transform values of a set. |
| [map$] | Transform values of a set. |
| [reduce] | Reduce values of set to a single value. |
| [filter] | Keep values which pass a test. |
| [filter$] | Keep values which pass a test. |
| [reject] | Discard values which pass a test. |
| [reject$] | Discard values which pass a test. |
| [flat] | Flatten nested set to given depth. |
| [flatMap] | Flatten nested set, based on map function. |
|  |  |
| [partition] | Segregate values by test result. |
| [partitionAs] | Segregates values by similarity. |
| [chunk] | Break set into chunks of given size. |
|  |  |
| [concat] | Append values from sets. |
| [concat$] | Append values from sets. |
| [join] | Join values together into a string. |
|  |  |
| [isDisjoint] | Check if sets have no value in common. |
| [union] | Give values present in any set. |
| [union$] | Give values present in any set. |
| [intersection] | Give values present in both sets. |
| [intersection$] | Give values present in both sets. |
| [difference] | Give values not present in another set. |
| [difference$] | Give values not present in another set. |
| [symmetricDifference] | Give values not present in both sets. |
| [symmetricDifference$] | Give values not present in both sets. |
| [cartesianProduct] | List cartesian product of sets. |

<br>
<br>


[![](https://img.youtube.com/vi/mvO6zaIUO18/maxresdefault.jpg)](https://www.youtube.com/watch?v=mvO6zaIUO18)
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/133403268.svg)](https://zenodo.org/badge/latestdoi/133403268)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-set/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-set?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f0511916d4a805c040f6/test_coverage)](https://codeclimate.com/github/nodef/extra-set/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/f0511916d4a805c040f6/maintainability)](https://codeclimate.com/github/nodef/extra-set/maintainability)


[is]: https://github.com/nodef/extra-set/wiki/is
[values]: https://github.com/nodef/extra-set/wiki/values
[entries]: https://github.com/nodef/extra-set/wiki/entries
[from]: https://github.com/nodef/extra-set/wiki/from
[from$]: https://github.com/nodef/extra-set/wiki/from$
[compare]: https://github.com/nodef/extra-set/wiki/compare
[isEqual]: https://github.com/nodef/extra-set/wiki/isEqual
[size]: https://github.com/nodef/extra-set/wiki/size
[isEmpty]: https://github.com/nodef/extra-set/wiki/isEmpty
[add]: https://github.com/nodef/extra-set/wiki/add
[add$]: https://github.com/nodef/extra-set/wiki/add$
[remove]: https://github.com/nodef/extra-set/wiki/remove
[remove$]: https://github.com/nodef/extra-set/wiki/remove$
[count]: https://github.com/nodef/extra-set/wiki/count
[countAs]: https://github.com/nodef/extra-set/wiki/countAs
[min]: https://github.com/nodef/extra-set/wiki/min
[max]: https://github.com/nodef/extra-set/wiki/max
[range]: https://github.com/nodef/extra-set/wiki/range
[head]: https://github.com/nodef/extra-set/wiki/head
[tail]: https://github.com/nodef/extra-set/wiki/tail
[take]: https://github.com/nodef/extra-set/wiki/take
[take$]: https://github.com/nodef/extra-set/wiki/take$
[drop]: https://github.com/nodef/extra-set/wiki/drop
[drop$]: https://github.com/nodef/extra-set/wiki/drop$
[subsets]: https://github.com/nodef/extra-set/wiki/subsets
[randomValue]: https://github.com/nodef/extra-set/wiki/randomValue
[randomEntry]: https://github.com/nodef/extra-set/wiki/randomEntry
[randomSubset]: https://github.com/nodef/extra-set/wiki/randomSubset
[hasSubset]: https://github.com/nodef/extra-set/wiki/hasSubset
[has]: https://github.com/nodef/extra-set/wiki/has
[find]: https://github.com/nodef/extra-set/wiki/find
[findAll]: https://github.com/nodef/extra-set/wiki/findAll
[forEach]: https://github.com/nodef/extra-set/wiki/forEach
[some]: https://github.com/nodef/extra-set/wiki/some
[every]: https://github.com/nodef/extra-set/wiki/every
[map]: https://github.com/nodef/extra-set/wiki/map
[map$]: https://github.com/nodef/extra-set/wiki/map$
[reduce]: https://github.com/nodef/extra-set/wiki/reduce
[filter]: https://github.com/nodef/extra-set/wiki/filter
[filter$]: https://github.com/nodef/extra-set/wiki/filter$
[reject]: https://github.com/nodef/extra-set/wiki/reject
[reject$]: https://github.com/nodef/extra-set/wiki/reject$
[flat]: https://github.com/nodef/extra-set/wiki/flat
[flatMap]: https://github.com/nodef/extra-set/wiki/flatMap
[partition]: https://github.com/nodef/extra-set/wiki/partition
[partitionAs]: https://github.com/nodef/extra-set/wiki/partitionAs
[chunk]: https://github.com/nodef/extra-set/wiki/chunk
[concat]: https://github.com/nodef/extra-set/wiki/concat
[concat$]: https://github.com/nodef/extra-set/wiki/concat$
[join]: https://github.com/nodef/extra-set/wiki/join
[isDisjoint]: https://github.com/nodef/extra-set/wiki/isDisjoint
[union]: https://github.com/nodef/extra-set/wiki/union
[union$]: https://github.com/nodef/extra-set/wiki/union$
[intersection]: https://github.com/nodef/extra-set/wiki/intersection
[intersection$]: https://github.com/nodef/extra-set/wiki/intersection$
[difference]: https://github.com/nodef/extra-set/wiki/difference
[difference$]: https://github.com/nodef/extra-set/wiki/difference$
[symmetricDifference]: https://github.com/nodef/extra-set/wiki/symmetricDifference
[symmetricDifference$]: https://github.com/nodef/extra-set/wiki/symmetricDifference$
[cartesianProduct]: https://github.com/nodef/extra-set/wiki/cartesianProduct
