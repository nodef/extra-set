Check if [set] has any truthy values, like [any()].

```javascript
const any = require('@extra-set/any');
// any(<set>)

any(new Set([0, null, '']));
// false
any(new Set([0, null, 'x']));
// true
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[any()]: https://docs.python.org/3/library/functions.html#any
