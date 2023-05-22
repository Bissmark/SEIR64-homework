import { useState } from 'react';
import './SearchForm.css'

const SearchForm = (props) => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();

        {/* pass a and b back to the parent */}
        props.onSubmit(a, b);
    };

    {/* getting input A */}
    const _handleInputA = (event) => {
        setA(event.target.value);
    };
    
    {/* getting input B*/}
    const _handleInputB = (event) => {
        setB(event.target.value);
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <label>
                Width:  
                <input type="number" name="a" required onInput={ _handleInputA } />
            </label>
            
            <label>
                Height:
                <input type="number" name="b" required onInput={ _handleInputB } />
            </label>
            
            <button>Submit</button> 
        </form>
    );
};

export default SearchForm;