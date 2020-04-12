const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const Book = require('./models/bookModel');

const bookRouter = require('./routes/bookRouter')(Book);
const loginRouter = require('./routes/loginRouter');

const db = mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', bookRouter);
app.use('/api', loginRouter.login());

app.get('/', (req, res) => {
  res.send('Welcome to my api !! Coo');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
