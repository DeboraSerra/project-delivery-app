const conn = require('./connection');

const LoginModel = {
  createUser: async ({ name, email, password, role }) => {
    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, ?);
    `;
    const [{ insertId }] = await conn.execute(query, [name, email, password, role]);
    return insertId;
  },
  getUser: async (email) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    const [[user]] = await conn.execute(query, [email]);
    return user;
  },
  getUserById: async (id) => {
    const query = `SELECT * FROM users WHERE id = ?`;
    const [[user]] = await conn.execute(query, [id]);
    return user;
  },
  forgotPassword: async (email) => {

  },
  resetPassword: async (email, password) => {
    const query = `
      UPDATE users SET password = ?
      WHERE email = ?;
    `;
    const updated = await conn.execute(query, [password, email]);
    return updated;
  },
};

module.exports = LoginModel;
