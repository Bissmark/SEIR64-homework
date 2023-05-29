const express = require('express');
const ejs = require('ejs');
const yahooStockAPI = require('yahoo-stock-api').default;
const yahoo = new yahooStockAPI();


const server = express();
server.set('view-engine', ejs)
const PORT = 1337;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/price', async (req, res) => {
        const data = await yahoo.getSymbol({ symbol: req.query.stock });
        console.log(data)
        res.render('stockprice.ejs', {company: data.name, stock: req.query.stock, price: data.response.previousClose});
});


server.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`)
});
