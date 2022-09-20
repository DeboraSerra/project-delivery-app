const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use(errorMiddleware);

module.exports = app;
