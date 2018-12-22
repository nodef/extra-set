Delete specified values from [set].

```javascript
const deleteAll = require('@extra-set/delete-all');
// deleteAll(<set>, <values>)

deleteAll(new Set('duck'), ['d', 'u']);
// Set {'c', 'k'}
deleteAll(new Set('duck'), 'uc');
// Set {'d', 'k'}
deleteAll(new Set('duck'), new Set('ck'));
// Set {'d', 'u'}
```


[![extra-set](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-set)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
