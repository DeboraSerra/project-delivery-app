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

const validateSale = async (info) => {
  const prodSchema = joi.object({
    id: joi.number().positive().required(),
    qty: joi.number().positive().required(),
  });
  const schema = joi.object({
    user: joi.number().positive().required(),
    seller: joi.number().positive().required(),
    total: joi.number().min(0.5).required(),
    address: joi.string().required(),
    number: joi.number().positive().required(),
    date: joi.date().required(),
    status: joi.string().required(),
    products: joi.array().items(prodSchema).required(),
  });
  const { value, error } = schema.validate(info);
  if (error) throw new CodeError(error.message, 400);
  return value;
}

const validateStatus = async (info) => {
  const schema = joi.object({
    id: joi.number().positive().required(),
    status: joi.string().valid('Pending', 'Preparing', 'On the way', 'Delivered').required(),
  });
  const { value, error } = schema.validate(info);
  if (error) throw new CodeError(error.message, 400);
  return value;
}

const validateGetById = async (info) => {
  const schema = joi.object({
    id: joi.number().positive().required(),
    role: joi.string().valid('customer', 'seller').required(),
  });
  const { value, error } = schema.validate(info);
  if (error) throw new CodeError(error.message, 400);
  return value;
}

module.exports = {
  validateLogin,
  validateEmail,
  validateProduct,
  validateSale,
  validateStatus,
  validateGetById,
}
