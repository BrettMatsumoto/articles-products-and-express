'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const articleRoute = require('./routes/articles.js');
const productRoute = require('./routes/products.js');

const app = express();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true});

const PORT = 8000;

app.use(urlEncodedParser);
app.use('/articles', articlesRoute);

const server = app.listen(PORT, () => {
    console.log(`Express is running at port ${PORT}.`);
})