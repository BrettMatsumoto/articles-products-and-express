'use strict';

const express = require('express');
const router = express.Router();
const articleRoute = require('../database/articles');

router
  .route('/')
  .get((req, res) => {
  res.render('templates/articles/index', articleRoute.getAllArticles());
})
  .post((req, res) => {
  articleRoute.postArticle(req, res);
});

router
  .route('/:title')
  .get((req,res) => {
  res.render('templates/articles/article', articleRoute.getSpecificArticle(req.url));
})
  .put((req, res) => {
  articleRoute.putArticle(req.url, res);
})
  .delete((req, res) => {
  articleRoute.deleteArticle(req, res);
});

module.exports = router;
