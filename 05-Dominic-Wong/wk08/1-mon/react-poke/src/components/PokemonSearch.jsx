import axios from 'axios';
import { useState } from 'react';

import PokemonInfo from './PokemonInfo';
import SearchForm from './SearchForm';

const PokemonSearch = () => {
    const [ image, setImage ] = useState("");
    const [ name, setName ] = useState("");

    const fetchInfo = (query) => {
        console.log('Searching for', query)
        const pokeURL = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;

        axios( pokeURL ).then( (response) => {
            console.log(response.data);
            setImage(response.data.sprites.other['official-artwork'].front_default);
            setName(response.data.forms[0].name);
        });

    }

    return (
        <div>
            <h1>Pokemon Searcher</h1>
            <SearchForm onSubmit={ fetchInfo } />
            <PokemonInfo image={ image } name={ name } />  
        </div>
    );
}

export default PokemonSearch;