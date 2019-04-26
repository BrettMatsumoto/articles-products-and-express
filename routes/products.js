'use strict';

const express = require('express');
const database = express.Router();
const productRoute = require('../database/products');
let count = 0;

database.route('/')
  .get((req, res) => {
    res.render('templates/products/index', productRoute.getAllProducts());
  })
  .post((req, res) => {
    count++;
    productRoute.postProduct(count, req.body.name, req.body.price, req.body.inventory);
    res.send({ success: true });
  });

database.route('/:id')
  .get((req, res) => {
    res.render('templates/products/products', productRoute.getSpecificProduct(req.params.id));
  })
  .put((req, res) => {
    productRoute.putProduct(req.params.id, req.body.name, req.body.price, req.body.inventory);
    res.send({ success: true });
  })
  .delete((req, res) => {
    productRoute.deleteProduct(req.params.id);
    res.send({ success: true });
  });

module.exports = database;
