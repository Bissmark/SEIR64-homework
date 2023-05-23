const express = require('express');
const ejs = require('ejs');
const stock = require('stock-quote');

const server = express();
server.set('view-engine', ejs);
const PORT = 3000;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/stock', (req, res) => {
    const code = req.query.code;
    stock.getQuote(code).then(data => {
        console.log(JSON.stringify(data));
        const price = `${data['currentPrice']}`;
        const currency = `${data['currency']}`;
        res.render('price.ejs', { price: price, code: code, currency: currency })
    }).catch((error) => {
        console.log(error);
    })
})

server.listen(PORT, () => console.log(`Now online at http://localhost:${ PORT }`));