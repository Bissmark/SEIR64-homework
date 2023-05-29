import {useState} from 'react'
import axios from 'axios';

// dTHIS IS WHERE YOU STARTED TRYING DUMB SHIT


const WordSearch = () => {
    const [words, setWords] = useState(null);

    const fetchWords = (word) => {
        console.log('searching Dictionary for', word);

        const dictionaryURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
        const searchURL = dictionaryURL + word
        // console.log(word)
        console.log(searchURL)

        axios.get(searchURL, word).then((result) => {
            // console.log('results.data')
            console.log(result.data[0].word)
            const words_results = result.data[0]
            setWords(words_results)
        }, () => {
            // on failure check? Somehow? Thanks Joel
            setWords(null)
        });
    };

    return (
        <div>
            <h1>WordSearch</h1>
            <SearchForm onSubmit={fetchWords} />
            <WordDisplay words={words} />
        </div>
    )
}

const SearchForm = (props) => {
    const [query, setQuery] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(query) // does a favor for the parent
    }

    const _handleQuery = (event) => {
        setQuery(event.target.value);
    }

    return (
        <form onSubmit={_handleSubmit}>
            <input type="search" required autoFocus placeholder="Search" onInput={_handleQuery} />
            <input type="submit" value={`search for ${query}`} />
        </form>
    )
}

const WordDisplay = (props) => {
    // console.log(props.words.meanings[0].definitions[0].definition) 
    if (props && props.words === null) {
        return '';
    } else {
        return (
            <div>
                <br />
                <h3>Word Overview</h3>
                <ul>
                    <li> Word: {props.words.word} </li>
                    <li> Meanings: {props.words.meanings[0].definitions[0].definition} </li>
                </ul>
            </div>
            );
        }
    }

export default WordSearch;