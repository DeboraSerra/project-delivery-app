const conn = require('./connection');

const SaleModel = {
	createSale: async (sale) => {
		const { user, seller, total, address, number, date, status, products } = sale;
		let query = `
			INSERT INTO sales (user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status)
			VALUES (?, ?, ?, ?, ? , ?, ?);
		`;
		const [{ insertId }] = await conn.execute(query, [user, seller, total, address, number, date, status]);
		query = `
			INSERT INTO saleProducts (sale_id, product_id, quantity)
			VALUES (?, ?, ?);
		`;
		await Promise.all(products.map(({ id, qty }) => conn.execute(query, [insertId, id, qty])));
		return { saleId: insertId, ...sale };
	},
	updateStatus: async ({ id, status }) => {
		const query = `
			UPDATE sales
			SET status = ?
			WHERE id = ?;
		`;
		const [[sale]] = await conn.execute(query, [status, id]);
		return sale;
	},
	getAllById: async ({ id, role}) => {
		const baseId = role === 'seller' ? 'seller_id' : 'user_id';
		const query = `
			SELECT * FROM sales
			WHERE ? = ?;
		`;
		const [sales] = await conn.execute(query, [baseId, id]);
		return sales;
	},
	getOne: async (id) => {
		const query = `SELECT * FROM sales WHERE id = ?;`;
		const [[sale]] = await conn.execute(query, [id]);
		return sale;
	},
	delete: async (id) => {
		const query = `DELETE FROM sales WHERE id = ?`;
		await conn.execute(query, [id]);
	},
};

module.exports = SaleModel;
