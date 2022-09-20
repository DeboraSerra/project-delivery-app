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
    const [user] = await conn.execute(query, [email]);
    return user;
  },
};

module.exports = LoginModel;
