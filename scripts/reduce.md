Reduce [set] to single value, like [Array.reduce()].

```javascript
const reduce = require('@extra-set/reduce');
// reduce(<set>, <reduce function>, [initial value])
// - <reduce function>(<accumulator>, <value>, <key>, <set>)

reduce(new Set('gust'), (acc, v) => acc+v);
// 'gust'
reduce(new Set('wind'), (acc, v, k, set) => acc+v, 'whirl');
// 'whirlwind'
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.reduce()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
