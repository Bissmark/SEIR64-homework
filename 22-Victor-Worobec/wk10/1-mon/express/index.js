const express = require('express');
const quote = require('stock-quote');
const weather = require('weather-js');

const server = express();
const PORT = 3001;

// STOCK CHECKER
server.get('/stock_checker', (req, res) => {
    res.render('stock_checker.ejs');
});

server.get('/stock_price', (req, res) => {

    // Docs - https://github.com/sperahd/stock-quote#readme
    quote.getQuote(req.query.stock_code).then((response) => {
        res.render('stock_price.ejs', { stock: response.symbol, price: response.currentPrice })
    }).catch((error) => {
        console.log(error);
        res.render('stock_price.ejs', { stock: error, price: error });
    });

});

// WEATHER FETCH
server.get('/weather_checker', (req, res) => {
    res.render('weather_checker.ejs');
});

server.get('/weather_results', (req, res) => {

    // Docs - https://www.npmjs.com/package/weather-js
    weather.find({search: req.query.weather_location, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
        
        res.render('weather_results.ejs', { data: result });
      });
   
});

server.listen(PORT, () => {
    console.log(`Now serving on http://localhost:${ PORT }`)
});