Map values in [set] to new values, like [Array.map()].

```javascript
const mapTo = require('@extra-set/map');
// mapTo(<set>, <map function>, [this], [target=new Set()])

var set = new Set('axe');
mapTo(set, (v) => v.toUpperCase());
// Set {'A', 'X', 'E'}
mapTo(set, (v, k, set) => v+0, null);
// Set {'a0', 'x0', 'e0'}
mapTo(set, (v, k, set) => v, null, new Set('t'));
// Set {'t', 'a', 'x', 'e'}
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.map()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
