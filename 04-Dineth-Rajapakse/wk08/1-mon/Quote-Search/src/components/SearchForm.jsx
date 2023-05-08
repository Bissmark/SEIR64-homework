import { useState } from "react";

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchQuote(query);
        //setQuery(event.target.value);
    };
    
    const handleInput = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input type="search" required autoFocus placeholder="anime" onInput={ handleInput } />
            <input type="submit" value={`Search for ${ query }`} />
        </form>
    );
};

export default SearchForm;