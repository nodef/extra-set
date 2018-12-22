Filter values from [set] that pass the test, like [Array.filter()].

```javascript
const filterTo = require('@extra-set/filter');
// filterTo(<set>, <test function>, [this], [target=new Set()])

var set = new Set('scout');
filterTo(set, (v) => v>'s');
// Set {'u', 't'}
filterTo(set, (v, k, set) => v>='s', null);
// Set {'s', 'u', 't'}
filterTo(set, (v, k, set) => v>='s', null, new Set(['z']));
// Set {'z', 's', 'u', 't'}
filterTo(set, (v, k, set) => v>='s', null, set);
// Set {'s', 'u', 't'} (set is modified)
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.filter()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
