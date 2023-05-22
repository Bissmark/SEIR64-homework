import { useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

const RecipeSearch = function () {
  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = (query) => {
    console.log(query);

    const edamamURL = "https://api.edamam.com/api/recipes/v2";

    const edamamParams = {
      api_key: "1721865e13de462c474584188870a2dc",
      app_id: "0663a4ed",
      text: query,
      format: "json",
      nojsoncallback: 1,
    };

    const generateURL = function () {
      return [
        edamamURL,
        "?type=public&q=",
        query,
        "&app_id=",
        edamamParams.app_id,
        "&app_key=",
        edamamParams.api_key,
        // "https://api.edamam.com/api/recipes/v2?type=public&q=",
        // `${query}`,
        // "&app_id="
        // //0663a4ed
        // `${edamamParams.app_id}`,
        // "&app_key=",
        // //%201721865e13de462c474584188870a2dc%09
        // `${edamamParams.api_key}`
      ].join("");
    };

    axios(generateURL(), {params: edamamParams}).then((response) => {
        console.log(response)
        const imageData = response.data.hits//.length//[0].recipe.images.REGULAR.url
        const urls = []
        for(let i = 0; i < imageData.length; i++) {
            urls.push(response.data.hits[i].recipe.images.REGULAR.url)
        }
        // const imageURLs = imageData.map( link => {
        //     link.recipe.images.REGULAR.url
        // })
        // console.log(imageData)
        console.log(urls)
        setRecipe(urls)
        console.log(recipe)
    })

  };

  return (
    <div>
      <SearchForm onSubmit={fetchRecipe} />
      <Gallery images={ recipe }/>
    </div>
  );
};

export default RecipeSearch;
