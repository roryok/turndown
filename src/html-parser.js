/*
 * Set up window for Node.js
 */

var root = (typeof window !== 'undefined' ? window : {})

/*
 * Parsing HTML strings
 */

function canParseHTMLNatively () {
  var Parser = root.DOMParser
  var canParse = false

  // Adapted from https://gist.github.com/1129031
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new Parser().parseFromString('', 'text/html')) {
      canParse = true
    }
  } catch (e) {}

  return canParse
}

function createHTMLParser () {
  var Parser = function () {}
  if (process.browser) {
    Parser.prototype.parseFromString = function (string) {
      var doc = document.implementation.createHTMLDocument('')
      doc.open()
      doc.write(string)
      doc.close()
      return doc
    }
  } else {
    var domino = require('domino')
    Parser.prototype.parseFromString = function (string) {
      return domino.createDocument(string)
    }
  }
  return Parser
}

export default canParseHTMLNatively() ? root.DOMParser : createHTMLParser()
