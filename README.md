[![Build Status](https://travis-ci.org/blgm/karma-buble-preprocessor.svg?branch=master)](https://travis-ci.org/blgm/karma-buble-preprocessor)
[![Dependencies](https://david-dm.org/blgm/karma-buble-preprocessor.svg)](https://david-dm.org/blgm/karma-buble-preprocessor)
[![Greenkeeper badge](https://badges.greenkeeper.io/blgm/karma-buble-preprocessor.svg)](https://greenkeeper.io/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# karma-buble-preprocessor

A [Karma preprocessor](http://karma-runner.github.io/1.0/config/preprocessors.html) for the [Bublé ES2015+ compiler](http://buble.surge.sh/guide/).

## Installation
To install as a `devDependency`:
```
npm install --save-dev karma-buble-preprocessor
```

## Configuration
Just add it to the `preprocessors` section of your [Karma configuration file](http://karma-runner.github.io/1.0/config/configuration-file.html), for instance:
```
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      'test/*.js': ['buble']
    },
...
}
```

## Purpose
The preprocessor will use [Bublé](http://buble.surge.sh/guide/) to transpile JavaScript ES2015+ format into
ES5 format suitable for older browsers.  [Bublé](http://buble.surge.sh/guide/) is still experimental, and this
preprocessor will aim to be forward looking in relation to [Bublé](http://buble.surge.sh/guide/) versions.

## License
See [LICENSE.md](LICENSE.md)

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)
