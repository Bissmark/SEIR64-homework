import { useState } from 'react';
import axios from 'axios';

import SearchForm from "./SearchForm";
import ShowContent from "./ShowContent";

const SearchData = () => {
    const [books, setBook] = useState([]);

    const fetchElements = (q) => {

        axios.get(q).then((response) => {
            const result = JSON.parse(response.request.response)
            console.log(result);
            const image = result.items[0].volumeInfo.imageLinks.thumbnail;
            const author = result.items[0].volumeInfo.authors[0];
            const publisher = result.items[0].volumeInfo.publisher;
            const publishDate = result.items[0].volumeInfo.publishedDate;
            const description = result.items[0].volumeInfo.description;
            const pages = result.items[0].volumeInfo.pageCount;
            const ratings = result.items[0].volumeInfo.averageRating;
            const array = [image, author, publisher, publishDate, description, pages, ratings]
            setBook(array);
        });
    };

    return (
        <div>
            <SearchForm onSubmit={ fetchElements } />
            <ShowContent books={ books } />
        </div>
    );
};

export default SearchData;