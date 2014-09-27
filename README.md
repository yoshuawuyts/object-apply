# object-apply
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Map a transformation to every value in an object.

## Installation
```bash
$ npm i --save object-apply
```

## Overview
```js
var apply = require('object-apply');

var target = {
  foo: 1,
  bar: 2
};

// apply transformation to object

apply(target, function(arg) {
  return arg * arg;
});
// => {foo: 1, bar: 4}
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/object-apply.svg?style=flat-square
[npm-url]: https://npmjs.org/package/object-apply
[travis-image]: https://img.shields.io/travis/yoshuawuyts/object-apply.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/object-apply
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/object-apply.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/object-apply?branch=master
