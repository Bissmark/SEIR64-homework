const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const server = express();​
server.use(express.static('public'));
server.set('view-engine', ejs); // See docs

const PORT = 1337;

server.get('/', (req, res) => {
    console.log('get/')
    // res.send('welcome to the home page')
    res.render('home.ejs')
});

server.get('/weather', (req, res) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather').then((response) => {
    res.render('weather.ejs', { weatherComponent: renderedWeather });
    });
});

server.listen(PORT, () => {  
    console.log(`Server listening on port ${PORT}...`);
});