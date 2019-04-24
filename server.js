'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const articleRoute = require('./routes/articles.js');
const productRoute = require('./database/products.js');
const PORT = 8000;

app.use(urlEncodedParser)
app.use('/articles', articleRoute);

const server = app.listen(PORT, () => {
  console.log(`Express is running at port ${PORT}.`)
})