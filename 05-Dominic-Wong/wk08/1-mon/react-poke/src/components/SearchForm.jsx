import { useState } from 'react';

const SearchForm = (props) => {
    const [ query, setQuery ] = useState();

    const _handleInput = (event) => {
        setQuery(event.target.value);
    };

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(query);
    };

    return (
        <div>
            <form onSubmit={ _handleSubmit }>
                <input type="search" required autoFocus placeholder="Pikachu" onInput={ _handleInput }/>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default SearchForm;