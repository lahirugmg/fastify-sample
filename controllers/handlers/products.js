const products = require('../../cloud/products.js');

const getProductsHandler = (req, reply) => {
  reply.send(products);
};


module.exports = {
  getProductsHandler,
};