// Import required modules
const express = require('express'); // Express.js framework
const ejs = require('ejs'); // Templating engine
const axios = require('axios'); // HTTP request library
const quote = require('stock-quote'); // Stock quote module

// Create an instance of the Express application
const server = express();

// Set the port number
const PORT = 1337;

// Handle the '/' route
server.get('/', (req, res) => {
    res.render('home.ejs'); // Render the 'home.ejs' view
});

// Handle the '/result' route
server.get('/result', (req, res) => {
    // Fetch stock quote using the 'stock-quote' module
    quote.getQuote(req.query.stock_code).then((response) => {
        res.render('result.ejs', { stock: response.symbol, price: response.currentPrice });
        // Render the 'result.ejs' view with stock symbol and current price as data
    });
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Now serving on http://localhost:${ PORT }`);
});
