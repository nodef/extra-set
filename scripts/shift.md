Get first value from [set] and remove it, like [Array.shift()].

```javascript
const shift = require('@extra-set/shift');
// shift(<set>)

shift(set=new Set(['simba', 'chip n dale', 'talespin']));
// 'simba', set=Set {'chip n dale', 'talespin'}
shift(set=new Set().add('duck tales').add('scooby doo'));
// 'duck tales', set=Set {'scooby doo'}
shift(set=new Set());
// undefined, set=Set {}
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Array.shift()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
