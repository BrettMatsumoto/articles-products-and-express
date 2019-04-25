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
  if (!req.body) res.send({ success: false });

  articles.push(req.body);
  res.send({ success: true });
};

const putArticle = (req, res) => {
  if (req.body) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].title === req.body.title) {
        articles[i] = req.body;
      }
    }
    res.send({ success: true });
  } else {
    res.send({ succes: false });
  }
};

const deleteArticle = (req, res) => {
  if (req.body) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].title === req.body.title) {
        articles.splice(i, 1);
      }
    }
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
};

module.exports = {
  getAllArticles,
  postArticle,
  putArticle,
  deleteArticle,
};
