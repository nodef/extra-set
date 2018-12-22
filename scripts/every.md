Check if all values in [set] pass the test, like [Array.every()].

```javascript
const every = require('@extra-set/every');
// every(<set>, <test function>, [this])

every(new Set('fart'), (v) => v>='f');
// false
every(new Set('fort'), (v, k, set) => v>='f', null);
// true
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.every()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
