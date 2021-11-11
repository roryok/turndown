/*
 * Set up window for Node.js
 */

var root = (typeof window !== 'undefined' ? window : {})

/*
 * Parsing HTML strings
 */

function createHTMLParser () {
  var Parser = function () {}
  Parser.prototype.parseFromString = function (string) {
    var doc = document.implementation.createHTMLDocument('')
    doc.open()
    doc.write(string)
    doc.close()
    return doc
  }
  return Parser
}

export default createHTMLParser()
