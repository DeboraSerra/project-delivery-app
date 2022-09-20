const model = require('../models/Login.model');
const { validateLogin, validateEmail } = require('../helpers/validations');
const CodeError = require('../helpers/CodeError');

const LoginService = {
  createUser: async (info) => {
    const value = await validateLogin(info);
    const exists = await model.getUser(value.email);
    if (exists) throw new CodeError('User already exists', 400);
    const insertedId = await model.createUser(value);
    return { ...value, id: insertedId };
  },
  getUser: async (email, password) => {
    await validateEmail(email);
    const user = await model.getUser(email);
    if (!user || user.password !== password) {
      throw CodeError('Invalid e-mail or password', 400);
    }
    const { password, ...info } = user;
    return info;
  },
};

module.exports = LoginService;
