const controller = require('../controllers/Product.controller');
const { Router } = require('express');
const { adminMiddleware, customerMiddleware } = require('../middlewares/Token.middleware');

const router = Router();

router.route('/')
  .get(customerMiddleware, controller.getAll)
  .post(adminMiddleware, controller.create);

router.route('/:id')
  .get(customerMiddleware, controller.getOne)
  .patch(adminMiddleware, controller.updatePrice)
  .delete(adminMiddleware, controller.delete);

module.exports = router;
