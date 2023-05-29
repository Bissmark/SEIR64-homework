const express = require('express');
const server = express();
const quote = require('stock-quote');

const PORT = 1337;

server.get('/', (req, res) => {
    let price = 0
    let code = 'nothing'
    res.render('stockquote.ejs', { price: price, code: code })
})

server.get('/quote', (req, res) => {
    console.log(req)
    quote.getQuote(req.query.stock).then( (data) => {
        let price = data.currentPrice
        let code = data.symbol
        res.render('stockquote.ejs', { price: price, code: code })
    });
})


server.listen(PORT, () => {  
    console.log(`Server listening on port ${PORT}...`);
});