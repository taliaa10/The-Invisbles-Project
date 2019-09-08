const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const VIEWS_PATH = path.join(__dirname, '/views');

const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');
const userInfoRouter = require('./routes/userInfoRoutes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', VIEWS_PATH);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cookieParser());

// app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);
app.use('/', viewRouter);
app.use('/api/v1/user-info', userInfoRouter);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
