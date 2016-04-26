
<img src='https://cdn.rawgit.com/adriantoine/kewler/master/media/kewler.svg' alt='kewler' width='500'>

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?maxAge=2592000)](https://github.com/sindresorhus/xo)
[![Travis](https://img.shields.io/travis/adriantoine/kewler.svg)](https://travis-ci.org/adriantoine/kewler)
[![Coveralls](https://img.shields.io/coveralls/adriantoine/kewler.svg)](https://coveralls.io/github/adriantoine/kewler)
[![Stable version](https://img.shields.io/npm/v/kewler.svg)](https://www.npmjs.com/package/kewler)
[![Dependency Status](https://img.shields.io/gemnasium/adriantoine/kewler.svg)](https://gemnasium.com/adriantoine/kewler)

`kewler` is a simple __functional__ and __immutable__ color manipulation library. 🎨

#### Mmmmh, what does it mean?

Ok, there is quite a few color manipulation libraries, but they are all kinda object oriented where you create your object instance and manipulate it. This one is more like a functional one, where you create an __immutable__ color wrapper which is a function and run any alteration you want and eventually get a hex color.

That's gonna be easier with an example:

```js
import {color} from 'kewler';

const blue = color('#0593ff');
console.log(blue()); // Prints '#0593ff'
```

Cool, you have a blue color boxed and wrapped.

#### HOLD ON! You've just made a function which returns the first parameter, I can do it myself!!

Ok well, that wrapper does a bit more... Want to get a lighter one? There you go:

```js
import {lightness} from 'kewler';

const lightBlue = blue(lightness(10));
console.log(lightBlue()); // Prints '#38a9ff'
```

Now you have another wrapper with a color 10% lighter! Whenever you want your color as a HEX value, just run it without any argument.

#### [An old senator](http://vignette2.wikia.nocookie.net/starwars/images/9/9a/Palp_trustme.jpg) that I met last week told me that the dark side is more cool, can I have it pls?

Oh well you can do whatever you want with your wrapper now, want a darker one? Here you go:

```js
const darkLightBlue = lightBlue(lightness(-30));
console.log(darkLightBlue()); // Prints '#005a9e'
```

#### Hhhm nice, but color is a bit more than just light and dark... I'm just not gonna use your library if...

Ok ok, you can change saturation and hue as well:

```js
import {saturation, hue} from 'kewler';

const paleBlue = blue(saturation(-50));
console.log(paleBlue()); // Prints '#5089b4'

const blueWhichIsActuallyGreen = blue(hue(-60));
console.log(blueWhichIsActuallyGreen()); // Prints '#05ff71'
```

And you can also combine and chain them:

```js
const pimpMyBlue = blue(saturation(-30), lightness(10));
console.log(pimpMyBlue()); // Prints '#56a5e1'

const blueWhichIsActuallyGreenButPaleAndLight = blue(hue(-60))(saturation(-30), lightness(10));
console.log(blueWhichIsActuallyGreenButPaleAndLight()); // Prints '#56e192'
```

Possibilities are literally endless!

```js
const ohMyBlue = blue(lightness(-10), hue(-30), lightness(5))(saturation(-20), hue(10))(lightness(20));
console.log(ohMyBlue()); // Prints '#63e0ee'
```

#### Woah! That's quite a lot of parenthesis!

Oh sorry, I got a bit overexcited, my point is that you can create your wrapper and manipulate it as much as you want, all you have to remember is that __a color wrapper is always going to return a new color wrapper if you pass it an argument__ (an alteration), and __it's always going to return a hex color when you execute it without any argument__.

That little wrapper that you get, you can pass it everywhere you want and modify it where you want, it's also __[immutable](https://en.wikipedia.org/wiki/Immutable_object)__.

Writing your own alteration for a color is quite easy as well, an alteration is just a function that takes an [HSL color](https://css-tricks.com/yay-for-hsla/) value as an array and returns a new one:

```js
const myAlteration = ([hue, sat, lit]) => ([hue, sat - 30, lit + 10]);

const myNewBlue = blue(myAlteration);
console.log(myNewBlue); // Prints '#56a5e1'
```

Also, if you just want a one-off alteration, you can use the `color` function with more than one argument:

```js
const oneOffLightBlueFromHex = color('#0593ff', lightness(10));
console.log(oneOffLightBlueFromHex); // Prints '#38a9ff'

const oneOffLightBlueFromColor = color(blue(), saturation(-30), lightness(10));
console.log(oneOffLightBlueFromColor); // Prints '#56a5e1'
```

Ah and another thing (last one, I promise), you can pass a HSL value as an array (`[int, int, int]`) or an object (`{ hue: int, sat: int, lit: int }`):

```js
const blueFromHSLArray = color([206, 100, 51]);
console.log(blueFromHSLArray()); // Prints '#0593ff'

const blueFromHSLObject = color({hue: 206, sat: 100, lit: 51});
console.log(blueFromHSLObject()); // Prints '#0593ff'
```

I think that's it! Now have fun and enjoy a __colorful life__!

#### Hold on bloody american! That's not quite the right way of spelling 'colour', you should be a bit more respectful with our ~~British~~ English language!

Ah, mmh, [I'm not american at all](http://adriantoine.com/about-me), I just thought that in IT, the american way of spelling english is more common, but as I'm currently living in England, I made a proxy `colour`, just for you!

```js
import {colour} from 'kewler';

const blue = colour('#0593ff');
console.log(blue()); // Prints '#0593ff'
```

Ok now that's it, enjoy!

#### No no no! You can't get away like this! Your library always returns a HEX value, but I need a HSL/RGB/Somethingelse value for my application!

Well, I want to keep it simple and I think that most browsers and system support HEX color values, so that's why library returns it, if you want to stay functional, there are tons of converters which will convert HEX values to any other system, if you think returning HEX values is not a good choice, I'd love to discuss about it in a [Github issue](https://github.com/adriantoine/kewler/issues). You can also use another color manipulation library like [TinyColor](https://github.com/bgrins/TinyColor) (I have never used it, it's just the first result from Google).

My library also doesn't support transparency, but that's something I'm looking at.

Ok so just before going, here is the command to install it:

```console
$ npm install --save kewler
```

Have fun!
