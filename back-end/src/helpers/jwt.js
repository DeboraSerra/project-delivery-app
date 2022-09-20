const jwt = require('jsonwebtoken');
const userModel = require('../models/Login.model');
const CodeError = require('./CodeError');

const secret = process.env.JWT_SECRET || 'jwt_secret';

const createToken = async (data) => {
  const token = jwt.sign(data, secret);
  return token;
}

const validateToken = async (token) => {
  const { data } = jwt.verify(token, secret);
  const user = await userModel.getUser(data.email);
  if (!user) throw new CodeError('Invalid token', 403);
  const { password, ...info } = user;
  return { ...info, token };
}

module.exports = {
  createToken,
  validateToken,
}
