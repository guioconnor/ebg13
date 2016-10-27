# ebg13

Simple Rot13 implementation

Example use

```
npm install ebg13
```

```
var ebg13 = require('ebg13');

var encodedMessage = ebg13('secret message');

console.log('Decoded message:' + ebg13(encodedMessage));
```