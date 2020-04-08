const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/test')

bookRouter.route('/books')
    .get((req,res) => {
      const response = {'hello' : "this is my response"}
      res.json(response);
    })

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my api !! Coo');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
