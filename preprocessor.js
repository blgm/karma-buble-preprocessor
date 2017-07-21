/**
 * Copyright (c) IBM Corp. 2017. All Rights Reserved.
 * This project is licensed under the MIT License, see LICENSE.md
 */

'use strict'

const buble = require('buble')

const createBublePreprocessor = function (args, config, logger, helper) {
  var log = logger.create('preprocessor.buble')

  return function (content, file, done) {
    log.debug('Processing "%s".', file.originalPath)
    done(buble.transform(content).code)
  }
}

createBublePreprocessor.$inject = ['args', 'config.createBublePreprocessor', 'logger', 'helper']
module.exports = {
  'preprocessor:buble': ['factory', createBublePreprocessor]
}
