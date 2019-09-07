const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const cors = require("cors");

const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());

// app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
