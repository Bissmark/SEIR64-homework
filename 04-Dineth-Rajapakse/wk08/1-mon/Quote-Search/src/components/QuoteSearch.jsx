import { useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import Library from "./Library";


const QuoteSearch = () => {
    const [quote, setQuote] = useState([]);

    const fetchQuote =  () => {                                                         ///async helped thru chatgpt lol
        axios("https://animechan.vercel.app/api/random").then((response) => {
            console.log(response.data);
            setQuote(response.data.quote)
        });
       
       

       
        // console.log('search quote library for', q);

        // const animeQuoteURL = 'https://animechan.vercel.app/api/random';

        // const animeQuoteParams = {
        //     method: '' //unsure what to put here
        //     //api key: 'dont believe it's required as public API
        //     text: quote,
        //     format: 'json',
        //     nojsoncallback: 1
        // };

    }; 
    return (
        <div>
            <SearchForm onSubmit= { fetchQuote } />
            <Library quote={quote} fetchQuote={fetchQuote} /> 
        </div>
    );
};

export default QuoteSearch;