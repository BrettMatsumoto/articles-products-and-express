'use strict';

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const articleRoute = require('./routes/articles.js');
const productRoute = require('./database/products.js');
const PORT = 8000;

app.use(urlEncodedParser)
app.use('/articles', articleRoute);
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const server = app.listen(PORT, () => {
  console.log(`Express is running at port ${PORT}.`);
})