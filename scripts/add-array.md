Add part of [array] to [set].

```javascript
const addArray = require('@extra-set/add-array');
// addArray(<set>, <array>, [begin=0], [end])
// begin, end: negative index supported
// -> <set>

addArray(new Set(), ['l', 'a', 's', 'a', 'g', 'n', 'e']);
// Set {'l', 'a', 's', 'g', 'n', 'e'}
addArray(new Set('las'), ['a', 'g', 'n', 'e']);
// Set {'l', 'a', 's', 'g', 'n', 'e'}
addArray(new Set('las'), ['a', 'g', 'n', 'e'], 2);
// Set {'l', 'a', 's', 'n', 'e'}
addArray(new Set('las'), ['a', 'g', 'n', 'e'], -2);
// Set {'l', 'a', 's', 'n', 'e'} (-2 => begin = second to last)
addArray(new Set('las'), ['a', 'g', 'n', 'e'], -2, -1);
// Set {'l', 'a', 's', 'n'} (-1 => end = last)
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
