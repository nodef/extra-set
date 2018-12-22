Check if all values in [set] are truthy, like [all()].

```javascript
const all = require('@extra-set/all');
// all(<set>)

all(new Set(['', {}, 4]));
// false
all(new Set(['x', {}, 4]));
// true
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[all()]: https://docs.python.org/3/library/functions.html#all
