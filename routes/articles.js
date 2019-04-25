'use strict';

const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const articleRoute = require('../database/articles.js');
const PORT = 8000;

router.get('/', (req, res) => {
  articleRoute.getAllArticles();
  res.render('templates/articles/article', articleRoute.getAllArticles());
});
router.post('/', (req, res) => {
  articleRoute.postArticle(req, res);
});
router.put('/:title', (req, res) => {
  articleRoute.putArticle(req, res);
});
router.delete('/:title', (req, res) => {
  articleRoute.deleteArticle(req, res);
});

module.exports = router;
