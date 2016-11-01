
var express = require('express');
var router = express.Router();
var databaseConnection = require("../database_connection");

/* GET users listing. */
router.get('/', function(req, res, next) {
  databaseConnection("book").select().then(function(books){
    res.render("list_books", {books: books});
  });
});

router.get('/new', function(req, res, next) {
  res.render("add_book");
});

router.post("/", function(req, res, next) {
  databaseConnection("book").insert({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    cover_url: req.body.cover_url
  }).then(function() {
    res.redirect("books");
  });
});

module.exports = router;
