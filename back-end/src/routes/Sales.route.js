const controller = require('../controllers/Sales.controller');
const { Router } = require('express');
const { customerMiddleware, sellerMiddleware } = require('../middlewares/Token.middleware');

const router = Router();

router.route('/')
  .get(customerMiddleware, controller.getAllById)
  .post(customerMiddleware, controller.createSale);

router.route('/:id')
  .get(customerMiddleware, controller.getOne)
  .patch(sellerMiddleware, controller.updateStatus)
  .delete(customerMiddleware, controller.delete);

module.exports = router;
