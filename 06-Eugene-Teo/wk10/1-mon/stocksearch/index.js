const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const server = express();
server.set('view engine', 'ejs');
server.use(express.static('public'));

const apiKey = 'L730F934M0CXI27A';

const PORT = 8888;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info', async (req, res) => {
    const stockCode = req.query.symbol;
    
    try {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockCode}&apikey=${apiKey}`;
      const response = await axios.get(url); 
      // console.log(response.data); 
      const latestDate = response.data["Meta Data"]["3. Last Refreshed"];
      const latestPrice = (response.data["Time Series (Daily)"])[latestDate]["4. close"];
        

      res.render('info.ejs', { stockCode, latestPrice });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving stock information.');
    };
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Limitations: 5 searches per min, 500 searches per day

// Data being retrieved 
// {
//   "Meta Data": {
//     "1. Information": "Daily Time Series with Splits and Dividend Events",
//     "2. Symbol": "MSFT",
//     "3. Last Refreshed": "2023-05-22",
//     "4. Output Size": "Compact",
//     "5. Time Zone": "US/Eastern"
// },
// "Time Series (Daily)": {
//     "2023-05-22": {
//         "1. open": "318.6",
//         "2. high": "322.59",
//         "3. low": "318.01",
//         "4. close": "321.18",
//         "5. adjusted close": "321.18",
//         "6. volume": "24115664",
//         "7. dividend amount": "0.0000",
//         "8. split coefficient": "1.0"
//     },
//     "2023-05-19": {
//         "1. open": "316.74",
//         "2. high": "318.75",
//         "3. low": "316.37",
//         "4. close": "318.34",
//         "5. adjusted close": "318.34",
//         "6. volume": "27546701",
//         "7. dividend amount": "0.0000",
//         "8. split coefficient": "1.0"
//     },