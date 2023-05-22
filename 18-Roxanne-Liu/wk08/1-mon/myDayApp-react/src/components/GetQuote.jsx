import { useEffect, useState } from "react";
import axios from 'axios';

function GetQuote() {
    const [quote, setQuote] = useState(null);

    const _fetchQuote = () => {
        axios('https://api.kanye.rest')
        .then((response) => {
            setQuote(response.data.quote)
        });
    }
    
    useEffect(() => {
        _fetchQuote();
    }, []);

    return (
        <div>
            <p className="quoteContainer">
                { quote }
            </p>
            <button onClick={ _fetchQuote }>
                🔄 Give me more wisdom
            </button>
        </div>
    )
}

export default GetQuote