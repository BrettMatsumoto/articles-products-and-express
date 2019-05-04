'use strict';

const knex = require('./database');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOveride = require('method-override');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const articleRoute = require('./routes/articles');
const productRoute = require('./routes/products');
const PORT = 8000;

app.use(urlEncodedParser);
app.use('/articles', articleRoute);
app.use('/products', productRoute);
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(methodOveride('_method'));
app.use(express.static('./main'))

app.get('/', (req, res) => {
  res.render('./main');
});

const server = app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}.`);
});
