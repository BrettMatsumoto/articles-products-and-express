'use strict';

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOveride = require('method-override');
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const articleRoute = require('./routes/articles');
const productRoute = require('./database/products');
const PORT = 8000;

app.use(urlEncodedParser);
app.use('/articles', articleRoute);
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(methodOveride('_method'));

const server = app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}.`);
});
