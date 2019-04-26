'use strict';

(function RMP() {
  let products = { products: [] };

  const getAllProducts = () => {
    return products;
  };

  const getSpecificProduct = (req) => {
    for (let i = 0; i <= products.products.length - 1; i++) {
      if (parseInt(products.products[i].id) === parseInt(req)) {
        return products.products[i];
      }
    }
  };
  
  const postProduct = (count, reqName, reqPrice, reqInventory) => {
    let product = { id: count, name: reqName, price: reqPrice, inventory: reqInventory };
    products.products.push(product);
  };

  const putProduct = (reqId, reqName, reqPrice, reqInventory) => {
    for (let i = 0; i < products.products.length; i++) {
      if (parseInt(products.products[i].id) === parseInt(reqId)) {
        products.products[i].name = reqName;
        products.products[i].price = reqPrice;
        products.products[i].inventory = reqInventory;
      }
    }
  };

  const deleteProduct = (req) => {
    for (let i = 0; i < products.products.length; i++) {
      if (parseInt(products.products[i].id) === parseInt(req)) {
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
})();
