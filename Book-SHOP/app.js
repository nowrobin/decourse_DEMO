const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const likeRouter = require('./routes/likes');
const cartRouter = require('./routes/cart');
const orderRouter =require('./routes/orders');

app.use('/users',userRouter)
app.use('/books',bookRouter)
app.use('/orders',orderRouter)
app.use('/carts',cartRouter)
app.use('/likes',likeRouter)
