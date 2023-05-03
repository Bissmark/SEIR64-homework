const bookSearch = ( bookTitle ) => {
    const xhr = new XMLHttpRequest();   // Create new XHR objects to store data

    // action when ready state change
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) { return };   // return unless readyState is 4

        // convert data to an object
        const bookInfo = JSON.parse( xhr.responseText );

        // assign element
        const $output = $( "#search-result" );
        $output.empty();
        
        // record book title
        const title = `<h2>${ bookInfo.items[0].volumeInfo.title }</h2>`

        // record book authors
        const author = `<p>Written by ${ bookInfo.items[0].volumeInfo.authors.join(", ") }</p>`

        // record book cover image
        const bookCover = new Image();
        bookCover.src = bookInfo.items[0].volumeInfo.imageLinks.thumbnail;
        bookCover.className = 'cover-image';

        $output.append( title, author, bookCover);  // insert info to element
    }

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`);
    // console.log( 12 );
    xhr.send();

};

$('#search-button').on('click', function () {
    const $bookTitle = $( '#book-title' ).val();
    bookSearch( $bookTitle );
});