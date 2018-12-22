Check if atleast one value in [set] passes the test, like [Array.some()].

```javascript
const some = require('@extra-set/some');
// some(<set>, <test function>, [this])

some(new Set('pest'), (v) => v<'l');
// true
some(new Set('post'), (v, k, set) => v<'l', null);
// false
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.some()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
