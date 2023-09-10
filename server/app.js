require("dotenv").config();

const express = require('express');
const path = require('path');
const cors = require("cors");

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');

const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);

// error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;
