import { useState } from "react";
import axios from "axios";


const Dictionary = () => {
    const  [ wordDefinition, setWordDefinition ] = useState( null );
    
    const getDefinition = ( word ) => {
        // Searching indiction in console
        console.log( 'Please wait while I get you the definition of "', word , '"' );

        // Simple URL for Api
        const dictionaryUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

        // Get data from Api
        axios.get( dictionaryUrl + word ).then(( result ) => {
            setWordDefinition( result.data );
        }, () => {
            setWordDefinition( null );
        });
    };

    return (
        <div>
            <h1>Dictonary: Get smarter or lazier</h1>
            <SearchForm onSubmit = { getDefinition } />
            <Definition data = { wordDefinition } />

        </div>
    );
};

const SearchForm = ( props ) => {
    const [ query, setQuery ] = useState('');

    const _handleInput = ( e ) => {
        setQuery(e.target.value);
    };

    const _handleSubmit = ( e ) => {
        e.preventDefault();
        props.onSubmit( query );
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" onInput={ _handleInput } required placeholder="Dictonary" />
            <input type="submit" value="Get Definition" />
        </form>
    );
};

const Definition = ( props ) => {
    // exit if no definition found
    if (props && props.data === null) {
        return '';
    } else {
        return (
            <div>
                <h2>The definition of { props.data[0].word }</h2>
                <h3>{ props.data[0].phonetic }</h3>
                <h4>{ props.data[0].meanings[ 0 ].partOfSpeech }</h4>
                <h4>Meaning: { props.data[0].meanings[ 0 ].definitions[ 0 ].definition }</h4>
                <h4>{ props.data[0].meanings[ 1 ].partOfSpeech }</h4>
                <h4>Meaning: { props.data[0].meanings[ 1 ].definitions[ 0 ].definition }</h4>
            </div>
        );
    };
};

export default Dictionary;