const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express ();
server.set('view-engine', ejs);

const PORT = 1337; 

server.get('/', (req, res) => {
    console.log('get/')
    res.render('home.ejs')
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});