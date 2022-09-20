const LoginController = require('../controllers/Login.controller');
const { Router } = require('express');

const router = Router();

router.route('/')
  .post(LoginController.getUser);

router.route('/register')
  .post(LoginController.createUser);

module.exports = router;
