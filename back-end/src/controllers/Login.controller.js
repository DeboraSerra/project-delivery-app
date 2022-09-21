const { createToken } = require('../helpers/jwt');
const service = require('../services/Login.service');

const LoginController = {
  createUser: async (req, res) => {
    const user = await service.createUser(req.body);
    const { password, ...info } = req.body;
    const token = await createToken(info);
    res.status(200).json({ user: {
      ...user,
      token,
    }})
  },
  getUser: async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await service.getUser(email, password);
    const token = await createToken(userInfo);
    res.status(200).json({ user: { ...userInfo, token } });
  },
  resetPassword: async (req, res) => {
    const { password, email } = req.body;
    const user = await service.resetPassword(email, password);
    res.status(200).json({ user })
  },
  changePassword: async (req, res) => {
    const { oldPass, newPass, email } = req.body;
    const user = await service.changePassword(email, oldPass, newPass);
    res.status(200).json({ user })
  },
  forgotPassword: async (req, res) => {
    const { email } = req.body;
    await service.forgotPassword(email);
  }
};

module.exports = LoginController;
