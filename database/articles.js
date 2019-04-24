'use strict';

const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let articles = [];

const getAllArticles = (
() => {
  return articles;
});

const postArticle = (req, res) => {
  if (req.body) {
    articles.push(req.body);
    console.log(articles)
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
};

module.exports = {
  getAllArticles: getAllArticles,
  postArticle: postArticle,
};
