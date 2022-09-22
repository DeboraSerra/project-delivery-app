const { validateToken } = require('../helpers/jwt');
const CodeError = require('../helpers/CodeError');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {*} next
 */
 const customerMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const data = await validateToken(token);
  req.user = data;
  next();
}

const sellerMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const data = await validateToken(token);
  if (data.role !== 'seller' || data.role !== 'admin') {
    throw new CodeError('Unauthorized', 403);
  }
  req.user = data;
  next();
}

const adminMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const data = await validateToken(token);
  if (data.role !== 'admin') {
    throw new CodeError('Unauthorized', 403);
  }
  req.user = data;
  next();
}

module.exports = {
  sellerMiddleware,
  adminMiddleware,
  customerMiddleware,
}
