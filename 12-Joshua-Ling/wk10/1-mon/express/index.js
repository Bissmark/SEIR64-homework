const express = require('express');
const axios = require('axios');
const stock = require('stock-quote');
const ejs = require('ejs');

const server = express();
server.set('view-engine', ejs);
const PORT = 3000;

server.get('/', (req, res) => {
  res.render('form.ejs');
});

server.get('/answer', (req, res) => {
  stock.getQuote(req.query.code.toUpperCase()).then((data) => {
    res.render('result.ejs', {stock: data.symbol, currency: data.currency, price: data.currentPrice});
  }).catch(()=>{
    res.render('form.ejs');
  });;
});

server.listen(PORT, () => {
  console.log(`SERVING ON http://localhost:${PORT}`);
})