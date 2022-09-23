const service = require('../services/Products.service');

const ProductsController = {
  getAll: async (req, res) => {
    const { name } = req.query;
    const products = await service.getAll(name);
    res.status(200).json({ products });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const product = await service.getOne(id);
    res.status(200).json({ product });
  },
  create: async (req, res) => {
    const product = await service.create(req.body);
    res.status(200).json({ product });
  },
  updatePrice: async (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    const product = await service.updatePrice(id, price);
    res.status(200).json({ product });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await service.delete(id);
    res.status(203);
  },
};

module.exports = ProductsController;
