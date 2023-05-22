import { useState } from 'react';

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(query);
    };

    const _handleInput = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={_handleSubmit}>
            <input type="search" required autoFocus placeholder="12" onInput={_handleInput} />
            <input type="submit" value="Show number of cards" />
        </form>
    );
};

export default SearchForm;