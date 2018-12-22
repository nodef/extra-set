Get union of two [sets].

```javascript
const unionTo = require('@extra-set/union');
// unionTo(<set1>, <set2>, [target=new Set()])

var a = new Set('call');
var b = new Set('fall');
unionTo(a, b);
// Set {'c', 'a', 'l', 'f'}
unionTo(a, b, a);
// Set {'c', 'a', 'l', 'f'} (set "a" modified)
unionTo(a, b, b);
// Set {'f', 'a', 'l', 'c'} (set "b" modified)
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[sets]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
