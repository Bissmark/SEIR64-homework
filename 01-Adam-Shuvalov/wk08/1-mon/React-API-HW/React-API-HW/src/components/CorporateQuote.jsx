import Result from "./Result";
import { useState } from "react";
import axios from 'axios';

const CorporateQuote = () => {

    const [ url, setUrl ] = useState('');
    
    const _getQuote = () => {

        axios('https://corporatebs-generator.sameerkumar.website/').then((response) => {
        setUrl(response.data.phrase);
        console.log(response)
        });
    };

    return (
        <div>
            <Result quote={ url }/>
            <button onClick={ _getQuote }>Change Corporate Quote Quote</button>
        </div>
    );
};

export default CorporateQuote;