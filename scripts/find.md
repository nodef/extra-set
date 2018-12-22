Get first value in [set] that satisfies the test, like [Array.find()].

```javascript
const find = require('@extra-set/find');
// find(<set>, <test function>, [this])

find(new Set('jack'), (v) => v<='f');
// 'a'
find(new Set('jill'), (v, k, set) => v<='f', null);
// undefined
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
