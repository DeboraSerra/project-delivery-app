const model = require('../models/Sales.model');
const userModel = require('../models/Login.model');
const productModel = require('../models/Products.model');
const { validateSale, validateStatus, validateGetById } = require('../helpers/validations');
const CodeError = require('../helpers/CodeError');

const SaleService = {
  createSale: async (info) => {
    const value = await validateSale(info);
    const userExists = await userModel.getUser(value.user);
    if (!userExists) throw new CodeError('User not found', 404);
    const sellerExists = await userExists.getUser(value.seller);
    if (!sellerExists) throw new CodeError('Seller not found', 404);
    await Promise.all(info.products.map(async ({ id }) => {
      const exists = await productModel.getOne(id);
      if (!exists) throw new CodeError('Product not found', 404);
      return true;
    }));
    const sale = await model.createSale(value);
    return sale;
  },
  updateStatus: async (info) => {
    const value = await validateStatus(info);
    const exists = await model.getOne(value.id);
    if (!exists) throw new CodeError('Sale not found', 404);
    const sale = await model.updateStatus(value);
    return sale;
  },
  getAllById: async (info) => {
    const value = await validateGetById(info);
    const sales = await model.getAllById(value);
    return sales;
  },
  getOne: async (id, user) => {
    const sale = await model.getOne(id);
    if (!sale) throw new CodeError('Sale not found', 404);
    if ((user.role === 'customer' && user.id !== sale.user)
      || (user.role === 'seller' && user.id !== sale.seller)) {
      throw new CodeError('Unauthorized access', 403);
    }
    return sale;
  },
  delete: async (id) => {
    const exists = await model.getOne(id);
    if (!sale) throw new CodeError('Sale not found', 404);
    await model.delete(id);
  },
};

module.exports = SaleService;
