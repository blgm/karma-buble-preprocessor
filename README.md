[![npm](https://img.shields.io/npm/v/karma-buble-preprocessor.svg)](https://www.npmjs.com/package/karma-buble-preprocessor)
[![Build Status](https://travis-ci.org/blgm/karma-buble-preprocessor.svg?branch=master)](https://travis-ci.org/blgm/karma-buble-preprocessor)

# karma-buble-preprocessor
A [Karma preprocessor](http://karma-runner.github.io/1.0/config/preprocessors.html) for the [Bublé ES2015+ compiler](http://buble.surge.sh/guide/).

## Maintenance status
As [Bublé](http://buble.surge.sh/guide/) is no longer under active development, there is no plan
to add new features to this module. However critical security issues may be fixed.

## Installation
To install as a `devDependency`:
```
npm install --save-dev karma-buble-preprocessor
```

## Configuration
Just add it to the `preprocessors` section of your [Karma configuration file](http://karma-runner.github.io/1.0/config/configuration-file.html), for instance:
```javascript
// karma.conf.js
module.exports = function (config) {
  config.set({
    preprocessors: {
      'test/**/*.js': ['buble']
    }
  })
}
```

## Purpose
This preprocessor uses [Bublé](http://buble.surge.sh/guide/) to transpile JavaScript ES2015+ into
ES5 suitable for older runtimes.
- Bublé will not handle `import` statements in the code, so consider using a packager such as
 [karma-rollup-preprocessor](https://www.npmjs.com/package/karma-rollup-preprocessor) instead.
- The result of the transpilation is not saved, so for implementation code, consider using
 [buble-loader](https://www.npmjs.com/package/buble-loader) in
 [webpack](https://www.npmjs.com/package/webpack), or
 [rollup-plugin-buble](https://www.npmjs.com/package/rollup-plugin-buble) in
 [rollup](https://www.npmjs.com/package/rollup), so that the tests are run on what is shipped.

## License
See [LICENSE.md](LICENSE.md)

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

