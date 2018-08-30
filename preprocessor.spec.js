/**
 * Copyright (c) IBM Corp. 2017. All Rights Reserved.
 * This project is licensed under the MIT License, see LICENSE.md
 */

/* eslint-env jest */
'use strict'

const preprocessor = require('.')

describe('the karma buble preprocessor', () => {
  describe('the module export', () => {
    const factory = preprocessor['preprocessor:buble']

    it('has a key at `preprocessor:buble`', () => {
      expect(factory).toBeTruthy()
    })

    it('is an array of correct format', () => {
      expect(Array.isArray(factory)).toBeTruthy()
      expect(factory.length).toBe(2)
      expect(factory[0]).toBe('factory')
      expect(typeof factory[1]).toBe('function')
    })
  })

  describe('the factory function', () => {
    const factory = preprocessor['preprocessor:buble'][1]

    const fakeArgs = {}
    const fakeConfig = {}
    const fakeLogger = {
      create: jest.fn()
    }
    const fakeHelper = {}

    it('has the correct injection annotations', function () {
      expect(factory.$inject).toEqual(['args', 'config.createBublePreprocessor', 'logger', 'helper'])
    })

    it('creates a logger', () => {
      factory(fakeArgs, fakeConfig, fakeLogger, fakeHelper)
      expect(fakeLogger.create.mock.calls.length).toBe(1)
    })

    it('returns a transformer function', () => {
      expect(typeof factory(fakeArgs, fakeConfig, fakeLogger, fakeHelper)).toBe('function')
    })
  })

  describe('transformation of code', () => {
    const factory = preprocessor['preprocessor:buble'][1]

    const fakeLogObject = {
      debug: jest.fn()
    }

    const fakeArgs = {}
    const fakeConfig = {}
    const fakeLogger = {
      create: jest.fn().mockReturnValue(fakeLogObject)
    }
    const fakeHelper = {}

    const transformer = factory(fakeArgs, fakeConfig, fakeLogger, fakeHelper)

    it('transforms ES2015 code', (done) => {
      const fakeContent = 'const fakeConst = 7'
      const fakeFile = { originalPath: 'fakeFileName' }

      const fakeDone = (result) => {
        expect(result).toBe('var fakeConst = 7')
        expect(fakeLogObject.debug.mock.calls[0]).toEqual(['Processing "%s".', 'fakeFileName'])
        done()
      }

      transformer(fakeContent, fakeFile, fakeDone)
    })
  })
})
