const CodeError = require('../helpers/CodeError');
const joi = require('joi');

const validateLogin = async (info) => {
  const { role } = info;
  const schema = joi.object({
    name: joi.string().min(12).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    role: joi.string(),
  });
  const { value, error } = schema.validate(info);
  if (error) throw new CodeError(error.message, 400);
  if (!role) return { ...info, role: 'customer' };
  return value;
}

const validateEmail = async (email) => {
  const schema = joi.object({
    email: joi.string().email().required(),
  });
  const { value, error } = schema.validate(email);
  if (error) throw new CodeError('Invalid email format', 400);
  return value;
}

const validateProduct = async (product) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    price: joi.number().greater(0.5).required(),
    image: joi.string().required(),
  });
  const { value, error } = schema.validate(product);
  if (error) throw new CodeError(error.message, 400);
  return value;
}

module.exports = {
  validateLogin,
  validateEmail,
  validateProduct,
}
