'use strict';

const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let articles = [];

const getAllArticles = () => {
  return articles;
};

const postArticle = (req, res) => {
  if (req.body) {
    articles.push(req.body);
    res.send({ success: true });
    console.log(articles);
  } else {
    res.send({ success: false });
  }
};

const putArticle = (req, res) => {
  if (req.body) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].title === req.body.title) {
        articles[i] = req.body;
      }
    }
    res.send({ success: true });
    console.log(articles);
  } else {
    res.send({ success: false });
  }
};

module.exports = {
  getAllArticles: getAllArticles,
  postArticle: postArticle,
  putArticle: putArticle,
};
