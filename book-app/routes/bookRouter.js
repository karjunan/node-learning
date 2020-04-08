const express = require('express');
const bookRouter = express.Router();

function routes(Book) {
    bookRouter.route('/books')
    .post((req,res) => {
      const book = new Book(req.body);
      console.log(book);
      book.save()
      return res.status(201).json(book)
    })
    .get((req,res) => {
      console.log(req);
      const query = {};
      if(req.query.genre) {
        query.genre = req.query.genre;
      }
      console.log(query);
      Book.find(query, (err,books) => {
        if(err) {
          return res.send(err)
        } 
        return res.json(books);    
      });
    })
bookRouter.use('/books/:bookId',(req,res,next) => {
  Book.findById(req.params.bookId, (err,book) => {
    if(err) {
      return res.send(err);
    } else if(book) {
        req.book = book;
        return next();
    } 
    return res.status(404);
  });


})
bookRouter.route('/books/:bookId')
    .get((req,res) => {
      console.log('Book ID => ', req.params.bookId);
      res.json(req.book);  
    })
    .put((req,res) => {
      console.log("inside put method",req.body);
      const {book} = req;
      book.title = req.body.title;
      book.author = req.body.author;
      book.genre = req.body.genre;
      book.read = req.body.read;
      book.save();
      return res.json(book);
    })
  

return bookRouter;
}

module.exports = routes;