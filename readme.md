
# kewler

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Functional color manipulation

```js
var blue = color('#0593ff');
console.log(blue(darken(10))); // Prints '#0076d1'

var blue = color([206, 100, 51]); // HSL color
console.log(blue()); // Prints '#0593ff'
console.log(blue(darken(10))); // Prints '#0076d1'
```
