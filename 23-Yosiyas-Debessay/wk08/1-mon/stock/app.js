const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  const symbol = req.body.symbol;
  const url = `https://api.iextrading.com/1.0/stock/${symbol}/quote`;

  request(url, function (error, response, body) {
    if (error) {
      res.send('Error occurred while retrieving stock price');
      return;
    }

    const data = JSON.parse(body);
    const price = data.latestPrice;

    res.send(`The current price of ${symbol} is $${price}`);
  });
});

app.listen(3000, function () {
  console.log('Server is running on localhost:3000');
});
