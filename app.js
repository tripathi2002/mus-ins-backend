const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const authRouter = require('./routes/auth.route');
const productRouter = require('./routes/product.route');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.send("bye");
});

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);

app.use(notFound);
app.use(errorHandler)

module.exports = app;