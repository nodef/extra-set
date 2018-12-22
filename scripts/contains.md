Check if [set] contains all values (is subset).

```javascript
var contains = require('setcontains');
// contains(<set>, <values>)

var a = new Set('wax');
contains(a, ['w', 'a', 'n', 'd']);
// false
contains(a, new Set('xw'));
// true
contains(a, new Set());
// true
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
