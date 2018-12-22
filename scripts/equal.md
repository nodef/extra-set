Check if two [sets] are equal.

```javascript
var equal = require('set-equal');
// equal(<set1>, <set2>)

var a = new Set('life');
equal(a, new Set('fill'));
// false
equal(a, new Set('file'));
// true
equal(a, a);
// true
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[sets]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
