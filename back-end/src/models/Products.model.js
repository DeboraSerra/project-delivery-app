const conn = require('./connection');

const ProductsModel = {
  getAll: async () => {
    const query = `
      SELECT id, name, price, url_image AS urlImage
      FROM products;
    `;
    const [products] = await conn.execute(query);
    return products;
  },
  getOne: async (id) => {
    const query = `SELECT * FROM products WHERE id = ?;`;
    const [[product]] = await conn.execute(query, [id]);
    return product;
  },
  create: async ({ name, price, image }) => {
    const query = `
      INSERT INTO products (name, price, url_image)
      VALUES (?, ?, ?);
    `;
    const [{ insertId }] = await conn.execute(query, [name, price, image]);
    return { name, price, image, id: insertId };
  },
  updatePrice: async ({ id, price }) => {
    const query = `
      UPDATE products
      SET price = ?
      WHERE id = ?;
    `;
    const [product] = await conn.execute(query, [price, id]);
    return product;
  },
  delete: async (id) => {
    const query = `
      DELETE FROM products
      WHERE id = ?;
    `;
    const [product] = await conn.execute(query, [id]);
    return product;
  },
  getByName: async (name) => {
    const query = `
      SELECT * FROM products
      WHERE name LIKE CONCAT('%', ?, '%');
    `;
    const [products] = await conn.execute(query, [name]);
    return products;
  }
};

module.exports = ProductsModel;
