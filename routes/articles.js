'use strict';

const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const articleRoute = require('../database/articles.js');
const PORT = 8000;

router.post('/', (req, res) => {
  console.log('test123')
  console.log('body in articls.js: ', req.body)
  articleRoute.postArticle(req, res)
})

module.exports = router;