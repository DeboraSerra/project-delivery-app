const model = require('../models/Products.model');
const CodeError = require('../helpers/CodeError');
const { validateProduct } = require('../helpers/validations');

const ProductsServices = {
  getAll: async () => {
    const products = await model.getAll();
    return products;
  },
  getOne: async (id) => {
    const product = await model.getOne(id);
    if (!product) throw new CodeError('Product not found', 404);
    return product;
  },
  create: async (info) => {
    const data = await validateProduct(info);
    const product = await model.create(data);
    return product;
  },
  updatePrice: async (id, price) => {
    if (price < 0.5) throw new CodeError('Price must be greater than 0.5', 400);
    const exists = await model.getOne(id);
    if (!exists) throw new CodeError('Product not found', 404);
    await model.updatePrice({ id, price });
    return 'Product updated';
  },
  delete: async (id) => {
    const exists = await model.getOne(id);
    if (!exists) throw new CodeError('Product not found', 404);
    await model.delete(id);
  },
};

module.exports = ProductsServices;
