const service = require('../services/Sales.service');

const SalesController = {
  createSale: async (req, res) => {
    const { id } = req.user;
    const sale = await service.createSale({ user: id, ...req.body });
    res.status(200).json({ sale });
  },
  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const sale = await service.updateStatus({ id, status });
    res.status(200).json({ sale });
  },
  getAllById: async (req, res) => {
    const { id } = req.user;
    const { role } = req.query;
    console.log(role)
    const sales = await service.getAllById({ id, role });
    res.status(200).json({ sales });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const sale = await service.getOne(id, req.user);
    res.status(200).json({ sale });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await service.delete(id);
    res.status(203);
  },
};

module.exports = SalesController;
