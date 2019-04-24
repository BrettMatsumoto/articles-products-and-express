const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const articleRoute = require('./routes/articles.js');
const PORT = 8000;
