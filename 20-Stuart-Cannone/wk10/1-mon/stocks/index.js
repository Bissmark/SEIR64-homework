const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view engine', 'ejs'); // Set EJS as the view engine
const PORT = 1337;
server.set('views', __dirname + '/views');

server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.render('index', { quote: null, error: null });
});

server.post('/', async (req, res) => {
    const stockCode = req.body.stockCode;
    const apiKey = 'G3Q5X5FA9HFW6X1Y'; // Your API key

    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockCode}&apikey=${apiKey}`);
        const quoteData = response.data['Global Quote'];
        const quote = quoteData['05. price'];

    res.render('index', { stockCode, quote, error: null });
} catch (error) {
    console.error(error);
    res.render('index', { stockCode, quote: null, error: 'Failed to retrieve stock quote' });
}
});

server.use((req, res, next) => {
res.status(404).send('Not found');
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));
