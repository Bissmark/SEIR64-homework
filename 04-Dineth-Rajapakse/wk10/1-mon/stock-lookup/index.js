const express = require('express');
const ejs = require('ejs');
const quote = require('stock-quote');


const server = express();
server.set('view-engine', ejs); 
server.use(express.static('public'));

const PORT = 9688;


server.get('/', (req, res) => {
    console.log('get/')
    res.render('home.ejs')
});


server.get('/info', (req, res) => {
    quote.getQuote(req.query.symbol).then((info)=> {
        res.render('info.ejs', { symbol: req.query.symbol, price: info.currentPrice });
    });


    //console.log(req.query); // data in the query string ?key=value (http)--> check console for the objects being printed
    
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


