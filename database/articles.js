'use strict';

const express = require('express');
const expressApp = express.Router();

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

const postArticle = (req, res) => {
  if (!req.body) res.send({ success: false });

  articles.articles.push(req.body);
  res.send({ success: true });
};

const putArticle = (req, res) => {
  if (req.body) {
    for (let i = 0; i < articles.articles.length; i++) {
      if (articles.articles[i].title === req) articles.articles[i] = req.body;
    }
    res.send({ success: true });
  } else {
    res.send({ succes: false });
  }
};

const deleteArticle = (req, res) => {
  if (req.body) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].title === req.body.title) articles.articles.splice(i, 1);
    }
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
};

module.exports = {
  getAllArticles,
  getSpecificArticle,
  postArticle,
  putArticle,
  deleteArticle,
};
