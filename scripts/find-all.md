Get all values in [set] that satisfy the test, like [Array.find()].

```javascript
const findAll = require('@extra-set/find-all');
// findAll(<set>, <test function>, [this], [target=new Set()])
 
var set = new Set('scout');
findAll(set, (v) => v>'s');
// Set {'u', 't'}
findAll(set, (v, k, set) => v>='s', null);
// Set {'s', 'u', 't'}
findAll(set, (v, k, set) => v>='s', null, new Set(['z']));
// Set {'z', 's', 'u', 't'}
findAll(set, (v, k, set) => v>='s', null, set);
// Set {'s', 'u', 't'} (set is modified)
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
