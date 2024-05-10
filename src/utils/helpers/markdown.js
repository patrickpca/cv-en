// const markdown = require('markdown').markdown;

// module.exports = function (text) {
//   return markdown.toHTML(text);
// };


// src/utils/helpers/markdown.js
const markdown = require('markdown').markdown;

module.exports = function(text) {
  if (typeof text !== 'string') { // Checa se o texto não é uma string
    return ''; // Retorna uma string vazia para evitar erros
  }
  return markdown.toHTML(text); // Converte o texto de Markdown para HTML
};

