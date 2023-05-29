import { useState } from 'react';
import axios from 'axios';
import "./RandomRecipe.css"

const RandomRecipe = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');
    const [instruction, setInstruction] = useState('');

    // fetch the json data from api
    const _fetchRecipe = () => {
      axios('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
        
        // creating a variable to store duplicate codes
        const meal = response.data.meals[0];
        
        // getting specific data
        setTitle(meal.strMeal);
        setLink(meal.strSource);
        setImage(meal.strMealThumb);
        setInstruction(meal.strInstructions);
      });
    };

    return (
        <div>
            <h1>
                Let's feed you 🥴
            </h1>


            <h3>
                You still have to cook though...<span>don't be lazy...</span>
            </h3>


            <div className="center_button">
                <button className="click" onClick={_fetchRecipe}>
                    Click if hangry
                </button>
            </div>


            {/* recipe title */}
            <h2>
                <a href={ link } target="_blank" >{ title }</a>
            </h2>
            

            {/* image of recipe */}
            <div className="thumbnail">
                <img src={ image } alt={ title }></img>
            </div>
            

            {/* instructions */}
            <p className="instructions">
                { instruction }
            </p>
        </div>
    );
};

export default RandomRecipe;