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
  const { value, error } = joi.assert(email, joi.string().email());
  if (error) throw new CodeError('Invalid email format', 400);
  return value;
}

module.exports = {
  validateLogin,
  validateEmail,
}
