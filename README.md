Dirt simple format extension to `String.prototype` in node to allow easy formatting (without importing `util` or other formatting library).

Usage:

```js

// somewhere in project:
require('stringly');

// anywhere else in project:

var stringlyIsFun = '%s is %s'.format('stringly', 'fun');
```
