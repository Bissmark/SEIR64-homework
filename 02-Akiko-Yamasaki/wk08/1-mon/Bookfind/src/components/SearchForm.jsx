import { useState } from "react";


const SearchForm =(props) => {
    const [search, setSerach] = useState({});

    const _handleSubmit = (event) => {
        event.preventDefault();
        console.log('search: ' + search);
        props.onSubmit(search);
    }

    const _handleInput = (event) => {
        setSerach(event.target.value);
        // console.log('book is', search )
    }
    
    return (
        <form onSubmit={_handleSubmit}>
            <input type="search" required autoFocus placeholder="The trial" onInput={_handleInput} />
            <input type="submit" value='search' />
        </form>
    )
};

export default SearchForm