'use strict';

const express = require('express');
const database = express.Router();
const productRoute = require('../database/products');
let count = 0;

database
  .route('/')
  .get((req, res) => {
    res.render('templates/products/index', productRoute.getAllProducts());
  })
  .post((req, res) => {
    count++
    productRoute.postProduct(count, req.body.name, req.body.price, req.body.inventory, res);
    res.send({ success: true });
  });

database
  .route('/:title')
  .get((req, res) => {
    res.render('templates/products/products', productRoute.getSpecificProduct(req.url));
  })
  .put((req, res) => {
    productRoute.putProduct(req.url, req.body.title, req.body.price, req.body.inventory);
    res.send({ success: true });
  })
  .delete((req, res) => {
    productRoute.deleteProduct(req.body.title);
    res.send({ success: true });
  });

module.exports = database;
