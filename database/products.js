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

const postProduct = (count, reqName, reqPrice, reqInventory) => {
  let product = { id: count, name: reqName, price: reqPrice, inventory: reqInventory };
  products.products.push(product);
};

const putProduct = (reqUrl, reqName, reqPrice, reqInventory) => {
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
