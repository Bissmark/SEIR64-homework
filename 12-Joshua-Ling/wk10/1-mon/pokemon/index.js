const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.set('view-engine', ejs);
const PORT = 4321;

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/pokemon', (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.query.pokemon}/`).then((response) => { 
    const poke = response.data;
    console.log(poke.sprites.other['official-artwork'].front_default);
    res.render('pokemon.ejs', 
    {
      name: poke.name, 
      img: poke.sprites.other['official-artwork'].front_default,
      oldImg: poke.sprites.versions['generation-i']['red-blue'].front_default,
      oldImg2: poke.sprites.versions['generation-ii'].crystal.front_default,
      oldImg3: poke.sprites.versions['generation-iii'].emerald.front_default,
      oldImg4: poke.sprites.versions['generation-iv'].platinum.front_default,
      oldImg5: poke.sprites.versions['generation-v']['black-white'].animated.front_default,
      oldImg6: poke.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default,
      oldImg7: poke.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default,
    });
  }).catch(()=> {
    res.render('home.ejs');
  });
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});