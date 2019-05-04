'use strict';

const express = require('express');
const database = express.Router();
const knex = require('../database');
let count = 0;

database.get('/', (req, res) => {
  return knex
    .select('*')
    .from('products')
    .then((result) => {
      let obj = { products : result };
      res.render('templates/products/index', obj)
    })
})

database.get('/edit', (req, res) => {
  let productTitle = req.params.title
  return knex
    .select('*')
    .from('products')
    .where({
      title: productTitle 
    })
    .then((result) => {
      res.render('templates/articles/edit', result[0])
    })
})

module.exports = database;
