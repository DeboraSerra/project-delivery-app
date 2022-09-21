const controller = require('../controllers/Product.controller');
const { Router } = require('express');

const router = Router();

router.route('/')
  .get(controller.getAll)
  .post(controller.create);

router.route('/:id')
  .get(controller.getOne)
  .patch(controller.updatePrice)
  .delete(controller.delete);

module.exports = router;
