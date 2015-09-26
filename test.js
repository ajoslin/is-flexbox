'use strict'

var test = require('tape')
var isFlexbox = require('./')

test(function (t) {
  t.equal(isFlexbox, true, 'true in node / modern browsers')
  t.end()
})
