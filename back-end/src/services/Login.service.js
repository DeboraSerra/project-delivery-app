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
    const { password, ...user } = value;
    return { ...user, id };
  },
  getUser: async (email, password) => {
    await validateEmail({ email });
    const user = await model.getUser(email);
    if (!user) {
      throw new CodeError('Invalid e-mail or password', 400);
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new CodeError('Invalid e-mail or password', 400);
    }
    const { password: pass, ...info } = user;
    return info;
  },
  forgotPassword: async (email) => {},
  resetPassword: async (email, password) => {
    if (password.length < 6) {
      throw new CodeError('Password must have at least 6 characters', 400);
    }
    const hash = await bcrypt.hash(password, 15);
    const info = await model.resetPassword(email, hash);
    const { password: pass, ...user } = info;
    return user;
  },
  changePassword: async (email, oldPass, newPass) => {
    const user = await model.getUser(email);
    const match = await bcrypt.compare(oldPass, user.password);
    if (!match) {
      throw new CodeError('Password doesn\'t match', 400);
    }
    if (newPass.length < 6) {
      throw new CodeError('Password must have at least 6 characters', 400);
    }
    const hash = await bcrypt.hash(newPass, 15);
    const info = await model.resetPassword(email, hash);
    const { password: pass, ...newUser } = info;
    return newUser;
  },
};

module.exports = LoginService;
