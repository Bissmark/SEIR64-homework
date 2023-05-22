const express = require('express');
const ejs = require('ejs');
const liveStockPrice = require('live-stock-price');
const axios = require('axios');


// Basic setup for server
const server = express(); 
server.set('view-engine', ejs)
const PORT = 1337;



// Home page
server.get('/', (req, res) =>  {
    res.render('home.ejs');
});



// Results
server.get('/result', (req, res) => {
    console.log(req.query); // req.query contains the form data => stockSearch
    
    console.log('check what is coming back??', req.query.stockSearch)
    
    // put the search into a variable
    const stock = req.query.stockSearch;

    // get access to the API 
    liveStockPrice(stock).then((price) => {
        res.render('result.ejs', {search: stock, stockPrice: price})
    }) 
    .catch((error) => {
        console.error('Error:', error)
    });
})


server.listen(PORT, () => {
    console.log(`Now serving on http://localhost:${ PORT }`)
});