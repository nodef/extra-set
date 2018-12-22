Merge two or more [sets], like [Array.concat()].

```javascript
const concat = require('@extra-set/concat');
// concat(<set>...)

concat(new Set('row'), new Set('bow'));
// Set {'r', 'o', 'w', 'b'}
concat(new Set('column'), new Set('golem'));
// Set {'c', 'o', 'l', 'u', 'm', 'n', 'g', 'e'}
concat(new Set().add(76));
// Set {76}
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[sets]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.concat()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
