const jsdom = require("jsdom");

/*
 * Parsing HTML strings
 */

function createHTMLParser () {
  var Parser = function () {}
  Parser.prototype.parseFromString = function (string) {
    const dom = new jsdom(string)
    return dom.window.document;
  }
  return Parser
}

export default createHTMLParser()
