const axios = require('axios');
const ejs = require('ejs');
const express = require('express');

const nasaAPIKey = 'wyXfZMvcLg0uWG7KZf4iICzcnoUbdbdDvt9WdopB'

const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
    axios('https://api.nasa.gov/planetary/apod?api_key=' + nasaAPIKey ).then( (response) => {
        const imageURL = response.data.url;
        console.log(imageURL);
        res.render('home.ejs', {imageURL: imageURL});
    })
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));
