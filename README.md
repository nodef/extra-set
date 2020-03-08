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

Datatype methods:
- [is](https://www.npmjs.com/package/@extra-set/is)

About methods:
- [equal](https://www.npmjs.com/package/@extra-set/equal)

Transform methods:
- [addAll](https://www.npmjs.com/package/@extra-set/add-all)
- [addArray](https://www.npmjs.com/package/@extra-set/add-array)
- [deleteAll](https://www.npmjs.com/package/@extra-set/delete-all)
- [contains](https://www.npmjs.com/package/@extra-set/contains)
- [shift](https://www.npmjs.com/package/@extra-set/shift)
- [intersection](https://www.npmjs.com/package/@extra-set/intersection)
- [union](https://www.npmjs.com/package/@extra-set/union)
- [concat](https://www.npmjs.com/package/@extra-set/concat)

Functional methods:
- [forEach](https://www.npmjs.com/package/@extra-set/for-each)
- [some](https://www.npmjs.com/package/@extra-set/some)
- [every](https://www.npmjs.com/package/@extra-set/every)
- [find](https://www.npmjs.com/package/@extra-set/find)
- [findAll](https://www.npmjs.com/package/@extra-set/find-all)
- [reduce](https://www.npmjs.com/package/@extra-set/reduce)
- [filter](https://www.npmjs.com/package/@extra-set/filter)
- [map](https://www.npmjs.com/package/@extra-set/map)

Evaluate methods:
- [any](https://www.npmjs.com/package/@extra-set/any)
- [all](https://www.npmjs.com/package/@extra-set/all)
- [min](https://www.npmjs.com/package/@extra-set/min)
- [max](https://www.npmjs.com/package/@extra-set/max)
- [sum](https://www.npmjs.com/package/@extra-set/sum)
- [average](https://www.npmjs.com/package/@extra-set/average)


[![nodef](https://i.imgur.com/CEoS9wX.jpg)](https://nodef.github.io)

[Set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[extra-set.min]: https://www.npmjs.com/package/extra-set.min
