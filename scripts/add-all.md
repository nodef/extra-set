Add specified values to [set].

```javascript
const addAll = require('@extra-set/add-all');
// addAll(<set>, <values>, [begin=0], [end])

addAll(new Set('wait'), new Set('ed'));
// Set {'w', 'a', 'i', 't', 'e', 'd'}
addAll(new Set('wait'), 'ing');
// Set {'w', 'a', 'i', 't', 'n', 'g'}
addAll(new Set('wait'), 'ing', 1);
// Set {'w', 'a', 'i', 't', 'n', 'g'}
addAll(new Set('wait'), 'ing', 1, 2);
// Set {'w', 'a', 'i', 't', 'n'}
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
