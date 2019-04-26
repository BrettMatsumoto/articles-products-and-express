'use strict';

let products = { products: [] };

const getAllProducts = () => {
  return products;
};

const getSpecificProduct = (req) => {
  for (let i = 0; i <= products.products.length; i++) {
    if (`/${products.products[i].title}` === req) {
      return products.products[i];
    }
  }
};

const postProduct = (req) => {
  products.products.push(req);
};

const putProduct = (reqUrl, reqTitle, reqBody, reqAuthor) => {
  for (let i = 0; i < products.products.length; i++) {
    if (`/${products.products[i].title}` === reqUrl) {
      products.products[i].title = reqTitle;
      products.products[i].body = reqBody;
      products.products[i].author = reqAuthor;
    }
  }
};

const deleteProduct = (req) => {
  for (let i = 0; i < products.products.length; i++) {
    if (products.products[i].title === req) {
      products.products.splice(i, 1);
    }
  }
};

module.exports = {
  getAllProducts,
  getSpecificProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
