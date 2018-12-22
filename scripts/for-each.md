Call a function for each value in [set], like [Array.forEach()].

```javascript
const forEach = require('@extra-set/for-each');
// forEach(<set>, <called function>, [this])

forEach(new Set('park'), (v) => console.log(v));
// p
// a
// r
// k
forEach(new Set('skate'), (v, k, set) => console.log(v.toUpperCase()), null);
// S
// K
// A
// T
// E
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.forEach()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
