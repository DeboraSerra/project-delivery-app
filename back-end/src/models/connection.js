const mysql = require('mysql2');
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB_NAME
} = require('dotenv/config').process.env;

module.exports = mysql.createPool({
  user: MYSQL_USER,
  port: MYSQL_PORT,
  host: MYSQL_HOST,
  database: MYSQL_DB_NAME,
  password: MYSQL_PASSWORD,
})
