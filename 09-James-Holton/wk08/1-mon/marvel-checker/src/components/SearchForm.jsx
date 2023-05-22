import { useState } from 'react';

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(query);
    };

    return (
        <form onSubmit={_handleSubmit}>
            <input type="submit" value="Show upcoming movie" />
        </form>
    );
};

export default SearchForm;