const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337; 

// Talk to an API
server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info', (req, res) => {
    const stock = req.query.stockName;
    const apiUrl = `https://cloud.iexapis.com/stable/tops?token=pk_16a849fd637243a79fff90fa4d42bc5d&symbols=${stock}`;

    axios.get(apiUrl).then(response => {
        const lastSalePrice = response.data[0].lastSalePrice;
        res.render('info.ejs', { info: lastSalePrice, stock: stock.toUpperCase() });
      });
  });

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));

