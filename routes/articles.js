'use strict';

const express = require('express');
const database = express.Router();
const knex = require('../database');

database.get('/', (req, res) => {
  return knex
    .select('*')
    .from('articles')
    .then((result) => {
      let obj = { articles: result };  //handlebars needs an object but result is an array of objects so put an object around it
      res.render('templates/articles/index', obj);
    });
});

database.get('/new', (req, res) => {
  console.log('test');
  res.render('templates/articles/new')
})

database.get('/:title', (req, res) => {
  let articleTitle = req.params.title //because /:****** knows that what comes after the : is a request parameter
  return knex
    .select('*')
    .from('articles')
    .where({
      title: articleTitle
    })
    .then((result) => {
      res.render('templates/articles/article', result[0]) //since this is only 1 we need [0] since result is an array of objects
    })
})

database.get('/:title/edit', (req, res) => {
  let articleTitle = req.params.title
  return knex
    .select('*')
    .from('articles')
    .where({
      title: articleTitle
    })
    .then((result) => {
      res.render('templates/articles/edit', result[0])
    })
})

database.put('/:title', (req, res) => {
  let articleTitle = req.params.title
  return knex('products')
    .where({
      title : articleTitle
    })
    .update({
      body: `${req.body.body}`,
      author: `${req.body.author}`
    })
    .then(() => {
      res.render('templates/articles')
    })
})

module.exports = database;
