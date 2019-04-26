'use strict';

(function RMP() {
  let articles = { articles: [] };

  const getAllArticles = () => {
    return articles;
  };

  const getSpecificArticle = (req) => {
    for (let i = 0; i <= articles.articles.length - 1; i++) {
      if (`/${articles.articles[i].title}` === req) {
        return articles.articles[i];
      }
    }
  };

  const postArticle = (req) => {
    articles.articles.push(req);
  };

  const putArticle = (reqUrl, reqTitle, reqBody, reqAuthor) => {
    for (let i = 0; i < articles.articles.length; i++) {
      if (`/${articles.articles[i].title}` === reqUrl) {
        articles.articles[i].title = reqTitle;
        articles.articles[i].body = reqBody;
        articles.articles[i].author = reqAuthor;
      }
    }
  };

  const deleteArticle = (req) => {
    for (let i = 0; i < articles.articles.length; i++) {
      if (articles.articles[i].title === req) {
        articles.articles.splice(i, 1);
      }
    }
  };

  module.exports = {
    getAllArticles,
    getSpecificArticle,
    postArticle,
    putArticle,
    deleteArticle,
  };
})();
