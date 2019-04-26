'use strict';

let articles = { articles: [] };

const getAllArticles = () => {
  return articles;
};

const getSpecificArticle = (req) => {
  for (let i = 0; i <= articles.articles.length; i++) {
    if (`/${articles.articles[i].title}` === req) {
      return articles.articles[i];
    }
  }
};

const postArticle = (req) => {
  articles.articles.push(req);
};

const putArticle = (req) => {
  for (let i = 0; i < articles.articles.length; i++) {
    if (`/${articles.articles[i].title}` === req.url) {
      articles.articles = articles.articles[i] = req.body;
    }
  }
};

const deleteArticle = (req) => {
  for(let i = 0; i < articles.articles.length; i++) {
    if (articles.articles[i].title === req) {
      console.log(articles.articles)
      articles.articles.splice(i, 1);
      console.log(articles.articles)
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
