
import { useState } from "react"

const SearchForm = (props) => {
    
    const [query, setQuery] = useState("");
    
    const _handleSubmit = (event) => {
        event.preventDefault();
        ///////// props.onSubmit(query) coming from Recipe Search
        props.onSubmit( query )
    }
 
    const _handleInput = (event) => {
        setQuery(event.target.value)
    }

    return (
        
        <form className="form-container" onSubmit={ _handleSubmit }>
            <input type="search" required autoFocus placeholder="chicken" onInput={_handleInput} />
            <input type="submit" value="search" />
        </form>
        
    )
}

export default SearchForm;