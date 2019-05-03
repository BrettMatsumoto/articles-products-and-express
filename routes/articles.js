'use strict';

const express = require('express');
const database = express.Router();
const knex = require('../database/articles');

database
  .route('/')
  .get((req, res) => {
    let articles = articleRoute.getAllArticles();
    res.render('templates/articles/index', articles);
  })
  .post((req, res) => {
    articleRoute.postArticle(req.body, res);
    res.redirect('/articles');
  });

database.route('/new').get((req, res) => {
  res.render('templates/articles/new');
});

database.route('/:title/edit').get((req, res) => {
  let singleArticle = articleRoute.getSpecificArticle(req.params.title);
  res.render('templates/articles/edit', singleArticle);
});

database
  .route('/:title')
  .get((req, res) => {
    let singleArticle = articleRoute.getSpecificArticle(req.params.title);
    res.render('templates/articles/article', singleArticle);
  })
  .put((req, res) => {
    let editArticle = articleRoute.putArticle(req.url, req.body.title, req.body.body, req.body.author);
    res.render('templates/articles/edit', editArticle);
  })
  .delete((req, res) => {
    articleRoute.deleteArticle(req.body.title);
    res.send({ success: true });
  });

module.exports = database;
