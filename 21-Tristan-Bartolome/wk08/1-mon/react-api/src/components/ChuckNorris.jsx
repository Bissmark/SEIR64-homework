import { useState } from 'react';
import axios from 'axios';

// ChuckNorris component
const ChuckNorris = () => {

    const [fact, setFact] = useState('');

    // function to fetch a new fact from the API
    const _fetchFact = () => {
        console.log('fetching fact');
        axios('https://api.chucknorris.io/jokes/random').then((response) => {
            setFact(response.data.value);
        });
    };

    // Returns the button and the fact
    return (
        <div>
            <button onClick={ _fetchFact }>
                Generate
            </button>
            <p>
                { fact }
            </p>
        </div>
    );
};

// Export the ChuckNorris component
export default ChuckNorris;
