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
  getUser: async (id) => {
    const query = `
      SELECT name, email, role
      FROM users WHERE id = ?
    `;
    const [user] = await conn.execute(query, [id]);
    return user;
  },
};

module.exports = LoginModel;
