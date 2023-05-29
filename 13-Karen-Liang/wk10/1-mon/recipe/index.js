const express = require('express');
const axios = require('axios');
const ejs = require('ejs')



// set up server
const server = express();
server.set('view-engine', ejs)
const PORT = 1337;



server.get('/', (req, res) => {
    res.render('home.ejs')
})



server.get('/food', (req, res) => {
    axios.get('http://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
        // check what is coming back in the console
        //  console.log('NEW MEAL', response.data.meals[0].strMeal)

        // handle duplicate code 
        const meal = response.data.meals[0]
        
        res.render ('food.ejs', {name: meal.strMeal, instruction: meal.strInstructions, image: meal.strMealThumb});
    });
});

server.listen(PORT, () => console.log(`Surfing on http://localhost:${ PORT }`));