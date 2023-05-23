const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view-engine', ejs);
server.use(express.static(__dirname + '/public'));
const PORT = 1337; 

server.get('/', (req, res) => {
    const title = req.query.bookTitle;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=title:'${title}'`;

    axios.get(apiUrl).then(response => {
        const book = response.data.items[0].volumeInfo;
        const cover = book.imageLinks ? book.imageLinks.thumbnail : '';
        const book_author = book.authors ? book.authors.join(', ') : '';
        const book_info = book.description || '';
        res.render('home.ejs', { cover: cover, book_author: book_author, book_info: book_info });
      });
  });

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));

