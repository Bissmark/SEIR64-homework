import { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import AboutBook from "./AboutBook";

const BookFind = () => {

    const [bookTitle, setBookTitle] = useState('');
    const [bookCover, setBookCover] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [description, setDescription] = useState('');

    const fetchInfo = (search) => {
        const googleBookURL = 'https://www.googleapis.com/books/v1/volumes'
        const googleBookParams = {
            q: `title:${search}`
        };


        axios(googleBookURL, { params: googleBookParams }).then((response) => {

            setBookTitle(response.data.items[0].volumeInfo.title);
            setBookCover(response.data.items[0].volumeInfo.imageLinks.thumbnail);
            setBookAuthor(response.data.items[0].volumeInfo.authors);
            setDescription(response.data.items[0].volumeInfo.description);
        });

    }


    return (
        <div>
            <h1>Find your book</h1>
            <SearchForm onSubmit={fetchInfo} />
            <AboutBook
                bookTitle={bookTitle}
                bookAuthor={bookAuthor}
                bookCover={bookCover}
                description={description} />
        </div>
    )
}

export default BookFind