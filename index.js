'use strict'

var window = require('global/window')
var document = require('global/document')
var toArray = require('to-array')

var MATCH = /(f|F)lexWrap/

module.exports = checkFlexbox()

function checkFlexbox () {
  if (!window.getComputedStyle) return true
  var styles = window.getComputedStyle(document.documentElement, '')
  var match = toArray(styles).join('').match(MATCH)
  return !!match
}
