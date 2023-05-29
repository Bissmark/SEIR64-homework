const express = require('express');
const server = express();
const axios = require('axios')

const PORT = 1337

server.get('/', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=5V02pLsKBFHEsj611igPm5DX3O25d0SWvyCrL9nT').then((response) => {
        let picture = response.data.hdurl
        let description = response.data.explanation
        let title = response.data.title
        res.render('nasa-api.ejs', { picture, description, title })
    })
})

server.listen(PORT, () => {  
    console.log(`Server listening on port ${PORT}...`);
});