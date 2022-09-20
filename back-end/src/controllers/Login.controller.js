const { createToken } = require('../helpers/jwt');
const service = require('../services/Login.service');

const LoginController = {
  createUser: async (req, res) => {
    await service.createUser(req.body);
    const { password, ...info } = req.body;
    const token = await createToken(info);
    res.status(200).json({ user: {
      ...info,
      token,
    }})
  },
  getUser: async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await service.getUser(email, password);
    const token = await createToken(userInfo);
    res.status(200).json({ user: { ...userInfo, token } });
  },
};

module.exports = LoginController;
