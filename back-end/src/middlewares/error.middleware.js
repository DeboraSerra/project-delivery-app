const errorMiddleware = async (err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code || 500).json({ message });
}

module.exports = errorMiddleware;
