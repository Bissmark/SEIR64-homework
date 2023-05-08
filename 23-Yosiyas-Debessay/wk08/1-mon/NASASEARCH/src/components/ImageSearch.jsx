import { useState } from 'react';
import axios from 'axios';

import SearchFrom from './SearchForm';
import Gallery from "./Gallery";

const ImageSearch = () => {
    const [images, setImages] = useState([]);

    const fetchImages = (q) => {
        console.log('searching NASA for', q);
    
        const nasaURL = 'https://images-api.nasa.gov/search';
    
        const nasaParams = {
          api_key: '2f5ac274ecfac5a455f38745704ad084',
          q: q,
          media_type: 'image',
        };

        const generateURL = function (p) {
            return [
                'http://farm',
                p.farm,
                '.static.nasa.com/',
                p.server,
                '/',
                p.id,
                '_',
                p.secret,
                '_q.jpg'
            ].join('');
        };

        axios(nasaURL, { params: nasaParams }).then((response) => {
            const imageURLs = response.data.photos.photo.map(generateURL);
            setImages(imageURLs);
        });
    };

    return (
        <div>
            <h1>Image Search</h1>
            <SearchFrom onSubmit={ fetchImages } />
            <Gallery images={ images } />
        </div>
    );
};

export default ImageSearch;