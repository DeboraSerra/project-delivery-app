const model = require('../models/Login.model');
const bcrypt = require('bcrypt');
const { validateLogin, validateEmail } = require('../helpers/validations');
const CodeError = require('../helpers/CodeError');

const LoginService = {
  createUser: async (info) => {
    const value = await validateLogin(info);
    const exists = await model.getUser(value.email);
    if (exists) throw new CodeError('User already exists', 400);
    const hash = await bcrypt.hash(value.password, 15);
    const id = await model.createUser({ ...value, password: hash });
    return { ...value, id };
  },
  getUser: async (email, password) => {
    await validateEmail({ email });
    const user = await model.getUser(email);
    if (!user) {
      throw CodeError('Invalid e-mail or password', 400);
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new CodeError('Invalid e-mail or password', 400);
    }
    const { password: pass, ...info } = user;
    return info;
  },
};

module.exports = LoginService;
