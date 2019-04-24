'use strict';

const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const articleRoute = require('../database/articles.js');
const PORT = 8000;

router.post('/', (req, res) => {
  articleRoute.postArticle(req, res);
});

router.put('/:title', (req, res) => {
  articleRoute.putArticle(req, res);
});

module.exports = router;
