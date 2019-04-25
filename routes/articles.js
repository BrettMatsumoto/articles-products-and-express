'use strict';

const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const articleRoute = require('../database/articles.js');
const PORT = 8000;

router
  .route('/')
  .get((req, res) => {
  articleRoute.getAllArticles();
  res.render('templates/articles/index', articleRoute.getAllArticles());
})
  .post((req, res) => {
  articleRoute.postArticle(req, res);
});

router
  .route('/:title')
  .get((req,res) => {
  // articleRoute.getSpecificArticle(req.url);
  res.render('templates/articles/article', articleRoute.getSpecificArticle(req.url));
})
  .put((req, res) => {
  articleRoute.putArticle(req, res);
})
  .delete((req, res) => {
  articleRoute.deleteArticle(req, res);
});

module.exports = router;
