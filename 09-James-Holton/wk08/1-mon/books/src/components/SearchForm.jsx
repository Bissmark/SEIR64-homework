import { useState } from 'react';

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        console.log(query);
        props.onSubmit(query);
    };

    const _handleInput = (event) => {
        setQuery('https://www.googleapis.com/books/v1/volumes?q=title:' + event.target.value);
    };

    return (
        <form onSubmit={_handleSubmit}>
            <input type="search" required autoFocus placeholder="Jaws" onInput={_handleInput} />
            <input type="submit" value="Search Book" />
        </form>
    );
};

export default SearchForm;