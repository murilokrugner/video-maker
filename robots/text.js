const algorithmia = require("algorithmia");
const algorithmiaApiKey = require("../credentials/algorithmia.json").apikey;

function robot(content) {
  fetchContentFromWikipedia(content);
  //sanitizeContent(content);
  //breakContentIntoSenteces(content);

  function fetchContentFromWikipedia(content) {
    const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey);
    const wikipediaAlgorithmia = algorithmiaAuthenticated.algo(
      "web/WikipediaParser/0.1.2"
    );
    const wikipediaResponse = wikipediaAlgorithmia.pipe(content.searchTerm);
    const wikipediaContent = wikipediaResponse.get();

    console.log("wikipediaContent ", wikipediaContent);
  }
}

module.exports = robot;
