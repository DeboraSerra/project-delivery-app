const LoginController = require('../controllers/Login.controller');
const { Router } = require('express');

const router = Router();

router.route('/')
  .post(LoginController.getUser);

router.route('/register')
  .post(LoginController.createUser);

router.route('/reset')
  .post(LoginController.resetPassword);

router.route('/change')
  .post(LoginController.changePassword);

router.route('/forgot')
  .post(LoginController.forgotPassword);

module.exports = router;
