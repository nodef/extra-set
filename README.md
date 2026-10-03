A pack of functions for working with Sets.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-set),
📦 [NPM](https://www.npmjs.com/package/@nodef/extra-set),
📰 [Docs](https://jsr.io/@nodef/extra-set/doc).

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

[Set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

<br>

```javascript
import * as xset from "jsr:@nodef/extra-set";

var x = new Set([1, 2, 3, 4, 5]);
var y = new Set([2, 4]);
xset.difference(x, y);
// → Set(3) { 1, 3, 5 }

var x = new Set([1, 2, 3]);
var y = new Set([3, 4]);
xset.isDisjoint(x, y);
// → false

var x = new Set([1, 2, 3, 4]);
var y = new Set([3, 4, 5, 6]);
xset.symmetricDifference(x, y);
// → Set(4) { 1, 2, 5, 6 }

var x = new Set([1, 2, 3]);
[...xset.subsets(x)];
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
| [union] | Obtain values present in any set. |
| [union$] | Obtain values present in any set. |
| [intersection] | Obtain values present in both sets. |
| [intersection$] | Obtain values present in both sets. |
| [difference] | Obtain values not present in another set. |
| [difference$] | Obtain values not present in another set. |
| [symmetricDifference] | Obtain values not present in both sets. |
| [symmetricDifference$] | Obtain values not present in both sets. |
| [cartesianProduct] | List cartesian product of sets. |

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-set)


[is]: https://jsr.io/@nodef/extra-set/doc/~/is
[values]: https://jsr.io/@nodef/extra-set/doc/~/values
[entries]: https://jsr.io/@nodef/extra-set/doc/~/entries
[from]: https://jsr.io/@nodef/extra-set/doc/~/from
[from$]: https://jsr.io/@nodef/extra-set/doc/~/from$
[compare]: https://jsr.io/@nodef/extra-set/doc/~/compare
[isEqual]: https://jsr.io/@nodef/extra-set/doc/~/isEqual
[size]: https://jsr.io/@nodef/extra-set/doc/~/size
[isEmpty]: https://jsr.io/@nodef/extra-set/doc/~/isEmpty
[add]: https://jsr.io/@nodef/extra-set/doc/~/add
[add$]: https://jsr.io/@nodef/extra-set/doc/~/add$
[remove]: https://jsr.io/@nodef/extra-set/doc/~/remove
[remove$]: https://jsr.io/@nodef/extra-set/doc/~/remove$
[count]: https://jsr.io/@nodef/extra-set/doc/~/count
[countAs]: https://jsr.io/@nodef/extra-set/doc/~/countAs
[min]: https://jsr.io/@nodef/extra-set/doc/~/min
[max]: https://jsr.io/@nodef/extra-set/doc/~/max
[range]: https://jsr.io/@nodef/extra-set/doc/~/range
[head]: https://jsr.io/@nodef/extra-set/doc/~/head
[tail]: https://jsr.io/@nodef/extra-set/doc/~/tail
[take]: https://jsr.io/@nodef/extra-set/doc/~/take
[take$]: https://jsr.io/@nodef/extra-set/doc/~/take$
[drop]: https://jsr.io/@nodef/extra-set/doc/~/drop
[drop$]: https://jsr.io/@nodef/extra-set/doc/~/drop$
[subsets]: https://jsr.io/@nodef/extra-set/doc/~/subsets
[randomValue]: https://jsr.io/@nodef/extra-set/doc/~/randomValue
[randomEntry]: https://jsr.io/@nodef/extra-set/doc/~/randomEntry
[randomSubset]: https://jsr.io/@nodef/extra-set/doc/~/randomSubset
[hasSubset]: https://jsr.io/@nodef/extra-set/doc/~/hasSubset
[has]: https://jsr.io/@nodef/extra-set/doc/~/has
[find]: https://jsr.io/@nodef/extra-set/doc/~/find
[findAll]: https://jsr.io/@nodef/extra-set/doc/~/findAll
[forEach]: https://jsr.io/@nodef/extra-set/doc/~/forEach
[some]: https://jsr.io/@nodef/extra-set/doc/~/some
[every]: https://jsr.io/@nodef/extra-set/doc/~/every
[map]: https://jsr.io/@nodef/extra-set/doc/~/map
[map$]: https://jsr.io/@nodef/extra-set/doc/~/map$
[reduce]: https://jsr.io/@nodef/extra-set/doc/~/reduce
[filter]: https://jsr.io/@nodef/extra-set/doc/~/filter
[filter$]: https://jsr.io/@nodef/extra-set/doc/~/filter$
[reject]: https://jsr.io/@nodef/extra-set/doc/~/reject
[reject$]: https://jsr.io/@nodef/extra-set/doc/~/reject$
[flat]: https://jsr.io/@nodef/extra-set/doc/~/flat
[flatMap]: https://jsr.io/@nodef/extra-set/doc/~/flatMap
[partition]: https://jsr.io/@nodef/extra-set/doc/~/partition
[partitionAs]: https://jsr.io/@nodef/extra-set/doc/~/partitionAs
[chunk]: https://jsr.io/@nodef/extra-set/doc/~/chunk
[concat]: https://jsr.io/@nodef/extra-set/doc/~/concat
[concat$]: https://jsr.io/@nodef/extra-set/doc/~/concat$
[join]: https://jsr.io/@nodef/extra-set/doc/~/join
[isDisjoint]: https://jsr.io/@nodef/extra-set/doc/~/isDisjoint
[union]: https://jsr.io/@nodef/extra-set/doc/~/union
[union$]: https://jsr.io/@nodef/extra-set/doc/~/union$
[intersection]: https://jsr.io/@nodef/extra-set/doc/~/intersection
[intersection$]: https://jsr.io/@nodef/extra-set/doc/~/intersection$
[difference]: https://jsr.io/@nodef/extra-set/doc/~/difference
[difference$]: https://jsr.io/@nodef/extra-set/doc/~/difference$
[symmetricDifference]: https://jsr.io/@nodef/extra-set/doc/~/symmetricDifference
[symmetricDifference$]: https://jsr.io/@nodef/extra-set/doc/~/symmetricDifference$
[cartesianProduct]: https://jsr.io/@nodef/extra-set/doc/~/cartesianProduct
