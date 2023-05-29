import { useState } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Result from './Result';

const ImageSearch = () => {
    const [image, setImage] = useState('');

        const fetchImages = (a, b) => {
            {/* fetching a and b values and then inputting into URL */}
            {/* check input in console */}
            console.log('searching for', a, 'and', b);

            const imageURL = `https://picsum.photos/${a}/${b}`;

        axios(imageURL).then((response) => {
            {/* need to set with config.url to get the URL apparently */}
            setImage(response.config.url);
            // console.log(response.config.url);
        });

    };

    return (
        <div>
            <h1>Image Search</h1>
            <SearchForm onSubmit={ fetchImages } />
            <Result image={image} />
        </div>
    );
};

export default ImageSearch;