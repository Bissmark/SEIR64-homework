const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const liveStockPrice = require('live-stock-price');

const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));

server.get('/stock', (req, res) => {
    res.render('stockForm.ejs');
})

server.get('/stock-info', (req, res) => {
    liveStockPrice(`${req.query.stock}`).then( (price) => {
        res.render('stockInfo.ejs', { price: price, stock: req.query.stock } );
    });
});