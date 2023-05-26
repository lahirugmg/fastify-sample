const typeString = { type: 'string' }; // since i will be using this type a lot

const product = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: typeString,
    description: typeString,
  },
};

const getProductsSchema = {
  response: {
    200: {
      type: 'array',
      items: product,
    },
  },
};

const getProductSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: product,
  },
};

const addProductSchema = {
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  response: {
    200: typeString, // sending a simple message as string
  },
};

const updateProductSchema = {
  body: {
    type: 'object',
    required: ['title', 'description'],
    properties: {
      title: typeString,
      description: typeString,
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString, // a simple message will be sent
  },
};

const deleteProductSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString,
  },
};

module.exports = {
  getProductsSchema,
  getProductSchema,
  addProductSchema,
  updateProductSchema,
  deleteProductSchema,
};
