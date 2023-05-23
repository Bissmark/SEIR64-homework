const express = require('express');
const StockQuote = require('stock-quote');

const server = express();
const PORT = 1337;

server.set('view engine', 'ejs');
server.use(express.static('public'));

// Set up the StockQuote API key
const stock = new StockQuote.Stock({ api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d' });

server.get('/', (req, res) => {
  res.render('home');
});

server.get('/info', (req, res) => {
  const stockCode = req.query.stock_code;
  stock.quote(stockCode)
  .then((info) => {
    res.render('info', { info });
  })
  .catch((error) => {
    res.status(500).send('Error retrieving stock information');
  });
});


server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
