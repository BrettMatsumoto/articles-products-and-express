'use strict';

const express = require('express');
const database = express.Router();
const articleRoute = require('../database/articles');

database.route('/')
  .get((req, res) => {
    res.render('templates/articles/index', articleRoute.getAllArticles());
  })
  .post((req, res) => {
    articleRoute.postArticle(req.body, res);
    res.send({ success: true });
  });

database.route('/:title')
  .get((req, res) => {
    res.render('templates/articles/article', articleRoute.getSpecificArticle(req.url));
  })
  .put((req, res) => {
    articleRoute.putArticle(req.url, req.body.title, req.body.body, req.body.author);
    res.send({ success: true });
  })
  .delete((req, res) => {
    articleRoute.deleteArticle(req.body.title);
    res.send({ success: true });
  });

module.exports = database;
