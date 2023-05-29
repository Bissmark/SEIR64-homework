const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const API_KEY = "V5EWDAGNDHI3QIKE"

var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + API_KEY;

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1338;

// Form input
server.get('/ask', (req, res) => {
    res.render('ask.ejs');
});

server.get('/answer', (req, res) => {
    console.log(req.query)

    axios.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
      }, (err, res, data) => {
        if (err) {
          console.log('Error:', err);
        } else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode);
        } else {
          // data is successfully parsed as a JSON object:
          console.log(data);
        }
    })
});


server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));