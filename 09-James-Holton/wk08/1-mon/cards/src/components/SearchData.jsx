import { useState } from 'react';
import axios from 'axios';

import SearchForm from "./SearchForm";
import ShowContent from "./ShowContent";

const SearchData = () => {
    const [cards, setCard] = useState([]);

    const fetchElements = (q) => {

        const int = Number(q) - 1;
        axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=' + q).then((response) => {
            console.log(response);
            const result = JSON.parse(response.request.response)
            // console.log(result.cards[0]);
            let images = [];
            for (let i = 0; i <= int; i++) {
                images.push(result.cards[i].image);
            }
            setCard(images);
        });
    };

    return (
        <div>
            <SearchForm onSubmit={ fetchElements } />
            <ShowContent cards={ cards } />
        </div>
    );
};

export default SearchData;