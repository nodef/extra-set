A [set] is a collection of unique values.

```javascript
const set = require('extra-set');

var s = new Set([1, 2, 3, 4]);
set.difference(s, [1, 3]);
// Set(2) { 2, 4 }

var t = new Set([2, 3]);
set.isDisjoint(t, [4, 5]);
// true

set.symmetricDifference([1, 2, 3], [2, 3, 4]);
// Set(2) { 1, 4 }
```

### reference

| Method                 | Action
|------------------------|-------
| [is]                   | Checks if value is a set.
| [compare]              | Compares two sets.
| [isEqual]              | Checks if two sets have the same values.
|                        |
| [some]                 | Checks if any value satisfies a test.
| [every]                | Checks if all values satisfy a test.
| [map]                  | Converts values through a mapping.
| [reduce]               | Simplifies a set to a value.
| [filter]               | Keeps values which satisfy a test.
| [filter$]              | Keeps values which satisfy a test.
| [find]                 | Gets a value which satisfies a test.
| [pop]                  | Removes a value from a set.
| [pop$]                 | Removes a value from a set.
|                        |
| [isSubset]             | Checks if set is part of all lists.
| [isSuperset]           | Checks if set is contained in all lists.
| [isDisjoint]           | Checks if lists have no value in common.
| [subsets]              | Lists all subsets of a set.
|                        |
| [union]                | Gives a set with values from all lists.
| [union$]               | Gives a set with values from all lists.
| [intersection]         | Gives a set with values in all lists.
| [intersection$]        | Gives a set with values in all lists.
| [difference]           | Gives a set excluding values in lists.
| [difference$]          | Gives a set excluding values in lists.
| [symmetricDifference]  | Gives a set with values in odd number of lists.

[![nodef](https://merferry.glitch.me/card/extra-set.svg)](https://nodef.github.io)

> Browserified, minified version of this package is [extra-set.min].

[compare]: https://github.com/nodef/extra-set/wiki/compare
[difference]: https://github.com/nodef/extra-set/wiki/difference
[difference$]: https://github.com/nodef/extra-set/wiki/difference$
[every]: https://github.com/nodef/extra-set/wiki/every
[filter]: https://github.com/nodef/extra-set/wiki/filter
[filter$]: https://github.com/nodef/extra-set/wiki/filter$
[find]: https://github.com/nodef/extra-set/wiki/find
[intersection]: https://github.com/nodef/extra-set/wiki/intersection
[intersection$]: https://github.com/nodef/extra-set/wiki/intersection$
[isDisjoint]: https://github.com/nodef/extra-set/wiki/isDisjoint
[isEqual]: https://github.com/nodef/extra-set/wiki/isEqual
[is]: https://github.com/nodef/extra-set/wiki/is
[isSubset]: https://github.com/nodef/extra-set/wiki/isSubset
[isSuperset]: https://github.com/nodef/extra-set/wiki/isSuperset
[map]: https://github.com/nodef/extra-set/wiki/map
[pop]: https://github.com/nodef/extra-set/wiki/pop
[pop$]: https://github.com/nodef/extra-set/wiki/pop$
[reduce]: https://github.com/nodef/extra-set/wiki/reduce
[some]: https://github.com/nodef/extra-set/wiki/some
[subset]: https://github.com/nodef/extra-set/wiki/subset
[subsets]: https://github.com/nodef/extra-set/wiki/subsets
[symmetricDifference]: https://github.com/nodef/extra-set/wiki/symmetricDifference
[union]: https://github.com/nodef/extra-set/wiki/union
[union$]: https://github.com/nodef/extra-set/wiki/union$
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[extra-set.min]: https://www.npmjs.com/package/extra-set.min
