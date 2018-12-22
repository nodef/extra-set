Get intersection of two [sets].

```javascript
const intersection = require('@extra-set/intersection');
// intersection(<set1>, <set2>, [target=new Set()])

var a = new Set('call');
var b = new Set('fall');
intersection(a, b);
// Set {'a', 'l'}
intersection(a, b, a);
// Set {'a', 'l'} (set "a" modified)
intersection(a, b, b);
// Set {'a', 'l'} (set "b" modified)
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[sets]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
