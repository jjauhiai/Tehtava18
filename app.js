var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./database');
const bcrypt = require('bcryptjs');
const basicAuth = require('express-basic-auth');

var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');
var userRouter = require('./routes/user');

var app = express();

const helmet = require('helmet');
const cors = require('cors');

//const basicAuth = require('express-basic-auth');
//app.use(basicAuth({users: { 'admin': '1234' }}))

app.use(basicAuth({
    authorizer: myAuthorizer,
    authorizeAsync: true,
}))

var auth_username='admin';
var auth_password='1234';

function myAuthorizer(username, password, cb){
    if(username===auth_username && password ===auth_password){
        return cb(null, true);
    }
    else{
        return cb(null, false);
    }
}

app.use(helmet());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);



module.exports = app;

