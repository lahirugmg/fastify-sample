'use strict'
const {
  getProductsSchema,
  getProductSchema,
  addProductSchema,
  updateProductSchema,
  deleteProductSchema,
} = require('../../controllers/schemas/products.js');

const {
  getProductsHandler,
} = require('../../controllers/handlers/products.js');

const getProductsOpts = {
  schema: getProductsSchema,
  handler: getProductsHandler,
};

module.exports = async function (fastify, opts) {
  fastify.get('/', getProductsOpts);

//    fastify.product('/test', async function (request, reply) {
//    return 'this is an example'
//    });
}
